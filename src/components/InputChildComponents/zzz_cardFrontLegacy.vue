<!-- <div class="baseballCard__wrapper--inner">
        <article class="gridParent article--cardFront">
          <figure class="figure--player">
            <img
              loading="lazy"
              class="image--player"
              :src="playerImageURLorDataString"
              :alt="playerName + ' being awesome'"
            />
          </figure>
          <header class="masthead--center gridArea">
            <div class="row">
              <h2>
                <input v-model="teamName" type="text" placeholder maxlength="42" />
              </h2>
            </div>
          </header>

          <section class="image__container gridArea">

            <input
              class="fileInput--fullContainerSize"
              type="file"
              id="playerImageFileInput"
              ref="playerImageFileInput"
              name="playerImageFileInput"
              accept="image/*"
              @input="encodeImage"
            />
            <section class="footer--teamLogo">
              <img
                width="72"
                height="72"
                loading="lazy"
                class="image--teamLogo {{logoPosition}}"
                :src="teamLogoURL"
                :alt="teamLogoAltText"
              />

              <input
                class="fileInput--fullContainerSize"
                type="file"
                id="logoFileInput"
                name="logoFileInput"
                accept="image/*"
                @input="encodeImage"
              />
            </section>
          </section>

          <section class="footer--playerName gridArea">
            <div class="row">
              <h1>
                <input v-model="playerName" type="text" placeholder maxlength="48" />
              </h1>
            </div>
          </section>
          <section class="footer--playerPosition gridArea">
            <h3>
              <input v-model="playerPosition" type="text" placeholder maxlength="48" />
            </h3>
          </section>
        </article>
      </div>-->