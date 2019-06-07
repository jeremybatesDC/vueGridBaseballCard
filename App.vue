<template>


<main id="vueCardApp" class="baseballCard__wrapper" :style="cssProps">

	<!-- this instant prototype feature of vue cli is meant to require no cofig -->
	<!-- odd then that viewport isn't in default -- putting it here -->
	<svg class="hidden">
		<defs>
			<filter id="filterpaper" opacity=".5">
				<feTurbulence type="fractalNoise" baseFrequency=".5" numOctaves="1" result="noise"/>
				<feDiffuseLighting lighting-color="white" diffuseConstant="1" surfaceScale=".5" result="diffLight">
					<feDistantLight azimuth="100" elevation="55"/>
				</feDiffuseLighting>
			</filter>
			<filter id="filternoise">
				<feTurbulence type="fractalNoise" baseFrequency=".3333" numOctaves="1" stitchTiles="stitch"/>
			</filter>
			<filter id="filterfabric">
				<feTurbulence type="turbulence" baseFrequency="999" numOctaves="10" result="turbulence"/>
			</filter>
		</defs>
	</svg>


	<div class="baseballCard__wrapper--inner">
	<article class="gridParent">
		
		<aside class="corner--top--left"></aside>
		<header class="masthead--center">
		<h2>{{teamName}}</h2>
		</header>
		<aside class="corner--top--right"></aside>

		<aside class="sidebar--left"></aside>
		<section class="image__container">
			<!-- Edit this and the preview will update automatically. -->


		<img class="image--player" :src="playerImageURL" :alt="playerName + ' being awesome'">
		</section>
		<aside class="sidebar--right"></aside>

		<aside class="corner--bottom--left"></aside>
		<section class="footer--playerName">
		<h1>{{playerName}}</h1>
		</section>
		<section class="footer--playerPosition">
		<h3>{{playerPosition}}</h3>
		</section>
		<section class="footer--teamLogo">
		<img class="image--teamLogo" :src="teamLogoURL" :alt="teamLogoAltText">
		</section>
		<aside class="corner--bottom--right"></aside>

		<svg class="svg--textureOverlay" width='320' height='448'>
			<g>
				<rect width='320' height='448' :filter='`url(#${cardBackgroundTexture})`' :fill='`url(#${cardBackgroundTexture})`' opacity='1'/>
			</g>
		</svg>
		
	</article>
	</div>
	<form class="form--cardDesign">
	<fieldset>
		<legend>Player Information</legend>
		<label>Player Name: <small>(will persist via localStorage)</small>
		<input v-model="playerName" type="text" placeholder maxlength="48">
		</label>
		<label>Team Name:
		<input v-model="teamName" type="text" placeholder maxlength="42">
		</label>
		<label>Position:
		<input v-model="playerPosition" type="text" placeholder maxlength="48">
		</label>

		<div class="row">
			<label>Player Image (URL):
				<input v-model="playerImageURL" type="text" placeholder>
				</label>
				<label>Team Logo Image (URL):
				<input v-model="teamLogoURL" type="url " placeholder>
				</label>
		</div>
		
	</fieldset>
	<fieldset>
		<legend>Card Design</legend>
		<div class="row">
			<label>Font Weight
			<input v-model="cardTextFontWeight" type="range" min="200" max="900">
			</label>
			<label>Card Texture
				<select v-model="cardBackgroundTexture">
					<option>no texture</option>
					<option value="filterfabric">Fabric</option>
					<option value="filterpaper">Paper</option>
					<option value="filternoise">Noise</option> 
				</select>
			</label>
		</div>
		<div class="row">
			<label>Background
				<input v-model="cardBackgroundColor" type="color">
			</label>
			<label>Text
				<input v-model="cardTextColor" type="color">
			</label>
			<label>Border
				<input v-model="cardBorderColor" type="color"/>
			</label>
			<label>Corner Curve
				<input v-model="cardBorderCurve" type="range" min="0" max="24">
			</label>
			
		</div>
		
		<div class="row">
			
			<label>Brightness
			<input v-model="cardBrightness" type="range" min="1" max="1.3" step="0.01">
			</label>
			<label>Sepia
			<input v-model="cardSepia" type="range" min="0" max="50">
			</label>
			<label>Greyscale
			<input v-model="cardGrayScale" type="range" min="0" max="100">
			</label>
		</div>
		
		
	</fieldset>
	
	</form>
</main>
</template>

<script>
export default {
	data: function() {
		return {
			playerImageURL:
				'https://securea.mlb.com/mlb/images/players/head_shot/543685.jpg',
			playerName: 'Anthony Rendon',
			playerPosition: 'Third Base',
			teamLogoAltText: 'Nats Curley W Logo',
			teamLogoURL:
				'http://content.sportslogos.net/logos/54/578/full/rcehah9k0kekjkgzm077fflws.png',
			teamName: 'Washington Nationals',
			cardBackgroundColor: '#eee',
			cardBackgroundTexture: 'filterfabric',
			cardBorderColor: '#000',
			cardBorderCurve: '0',
			cardBrightness: '1',
			cardTextColor: '#000',
			cardTextFontWeight: '400',
			cardSepia: '0',
			cardGrayScale: '0',
		};
	},
	methods: {
		// i am starting to see why folks like jake archibald have wrapped this
		// persist() {
		// 	localStorage.playerName = this.playerName;
		// 	localStorage.teamName = this.teamName;
		// }
	},
	computed: {
		cssProps() {
			return {
				'--cardbackgroundcolor': this.cardBackgroundColor,
				'--cardtextcolor': this.cardTextColor,
				'--cardbordercolor': this.cardBorderColor,
				// border-radius duh, but what human readable label
				'--cardbordercurve': this.cardBorderCurve + 'px',
				'--cardtextfontweight': this.cardTextFontWeight,
				// '--cardtextfontwidth': this.cardTextFontWidth,
				'--cardsepia': this.cardSepia + '%',
				'--cardbrightness': this.cardBrightness,
				'--cardgrayscale': this.cardGrayScale + '%',
			};
		}
	},
	mounted: function(){
		//highly imperative for now until can implement object-level local storage (not rocket science but a pain that some vue libraries alleviate)
		if (localStorage.playerName) {this.playerName = localStorage.playerName;}
		if (localStorage.teamName) {this.teamName = localStorage.teamName;}
		if (localStorage.playerPosition) {this.playerPosition = localStorage.playerPosition;}
	},
	watch: {
		//this is for localStorage
		playerName(newPlayerName) {localStorage.playerName = newPlayerName;},
		teamName(newTeamName){localStorage.teamName = newTeamName;},
		playerPosition(newPlayerPosition){localStorage.playerPosition = newPlayerPosition;},
	}
};
</script>

<style lang="scss">
@font-face {
	font-family: 'Source Serif Variable';
	font-display: swap;
	src: url('SourceSerifVariable-Roman.ttf');
}

html {
  box-sizing: border-box;
  font-size: 10px;
	//--cardbackgroundcolor: #000;
	font-family: 'Source Serif Variable', -apple-system, BlinkMacSystemFont,
		'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', 'Helvetica', Arial,
		sans-serif;
}
*, *:before, *:after {
  box-sizing: inherit;
}

body {
	margin: 0;
	padding: 0;
}

.hidden {
	position: absolute;
	top: -9999px;
	left:-9999px;
	width: 1px;
	height:1px;
	overflow: hidden;
	opacity: 0;
}

//root and body styles canT go in scoped
//so either put those in sep style tag above, and leave below scoped
//or just be clear donT use it

.baseballCard__wrapper {
	padding: 3.2rem;
}

.baseballCard__wrapper--inner {
	display: inline-block;
	width: 32rem;
	//yes, hard height here because
	height: 44.8rem;
	background-color: var(--cardbackgroundcolor, #eee);
	color: var(--cardtextcolor, #000);
	font-variation-settings: "wght" var(--cardtextfontweight);
	border: 1px solid rgba(#000, 0.25);
	vertical-align: top;
	box-shadow: 5px 5px 5px rgba(#000, 0.25);
	// 2 aren't working correctly
	filter: sepia(var(--cardsepia, 0))
	;
}

.gridParent {
	display: grid;
	grid-template-columns: 2.4rem 1fr 1fr 1fr 1fr 2.4rem;
	grid-template-rows: 4.8rem 1fr 7.2rem;
	grid-column-gap: 0px;
	grid-row-gap: 0px;
	height: 100%;
}
.corner--top--left {grid-area: 1 / 1 / 2 / 2;}
.masthead--center {grid-area: 1 / 2 / 2 / 6;}
.corner--top--right {grid-area: 1 / 6 / 2 / 7;}
.sidebar--left {grid-area: 2 / 1 / 3 / 2;}
.image__container {grid-area: 2 / 2 / 3 / 6;}
.sidebar--right {grid-area: 2 / 6 / 3 / 7;}
.corner--bottom--left {grid-area: 3 / 1 / 4 / 2;}
.footer--playerName {grid-area: 3 / 2 / 4 / 5;}
.footer--playerPosition {grid-area: 3 / 5 / 4 / 6;}
.footer--teamLogo {/*overlap*/ grid-area: 2 / 5 / 3 / 6;text-align: right;}
.corner--bottom--right {grid-area: 3 / 6 / 4 / 7;}
.svg--textureOverlay {grid-area: 1 / 1 / 4 / 7;}

// there are some hard to iron out differences between filters when they are overtop of images
.svg--textureOverlay {
	z-index: -1;
}

.masthead--center {
	font-size: 1.2rem;
	align-self: center;
}
.image__container {
	display: flex;
}
.footer--playerName {
	font-size: 1.6rem;
	align-self: center;
}
.footer--playerPosition {
	align-self: center;
	text-align: right;
}
.footer--teamLogo {
	display: flex;
	justify-content: flex-end;
}
.image--teamLogo {
	// object-fit: cover;
	width: 4.8rem;
	border-radius: 50%;
	align-self: flex-end;
	justify-self: flex-end;
	z-index: 1
}

.image--player {
	object-fit: cover;
	object-position: 0 50%; 
	width: 100%;
	height: auto;
	max-height: 32rem;
	border: 3px solid var(--cardbordercolor, #000);
	border-radius:  var(--cardbordercurve, 0);
	filter:
		#{'grayscale(var(--cardgrayscale, 0))'} 
		brightness(var(--cardbrightness, 1))
	;
}

.form--cardDesign {
	display: inline-block;
	width: 32rem;
	padding-left: 3.2rem;
}

fieldset {
	margin-bottom: 1.6rem;
	padding: 1rem 1rem 0 1rem;
}
legend {
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
	//font-weight: bold;
	text-align: center;
	padding: 0 .4rem;
	font-size: 1.6rem;
}
label {
	display: block;
	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', 'Helvetica', Arial, sans-serif;
	font-weight: bold;
	margin-bottom: 1.6rem;
	// &.label--half {
	// 	display: inline-block;
	// 	width: calc(50% - 1rem);
	// 	+ .label--half {
	// 		margin-left: 1rem;
	// 	}
	// }
	// &.label--fourth {
	// 	display: inline-block;
	// 	width: calc(25% - 1rem);
	// 	+ .label--fourth {
	// 		margin-left: 1rem;
	// 	}
	// }
	input, select {
		display: block;
		font-family: inherit;
		font-size: 1.2rem;
		&:not([type="color"]) {
			width: 100%;
		}
	}
}

.row {
	display: flex;
	label {
		+ label {
			margin-left: 1rem;
		}
	}
}
</style>