<script lang="ts">
import { defineComponent } from "vue";

import type { CharacterShort } from "src/interfaces";
import CharacterLocation from "./CharacterLocation.vue";
import CharacterEpisode from "./CharacterEpisode.vue";

export default defineComponent({
  components: { CharacterEpisode, CharacterLocation },
  props: {
    character: {
      required: true,
      type: Object as () => CharacterShort,
    },
  },
});
</script>

<template>
  <div>
    <h1>{{ character.name }}</h1>
    <img :alt="character.name" :src="character.image" />
    <dl>
      <dt>Status</dt>
      <dd>
        {{
          character.status.charAt(0).toUpperCase() + character.status.slice(1)
        }}
      </dd>
      <dt>Species</dt>
      <dd>{{ character.species }}</dd>
      <dt v-if="character.type">Type</dt>
      <dd v-if="character.type">{{ character.type }}</dd>
      <dt>Location</dt>
      <dd v-if="character.location.url">
        <CharacterLocation
          :location-id="character.location.url.split('/').slice(-1)"
        />
      </dd>
      <dd v-else>Unknown</dd>
      <dt>Origin</dt>
      <dd v-if="character.origin.url">
        <CharacterLocation
          :location-id="character.origin.url.split('/').slice(-1)"
        />
      </dd>
      <dd v-else>Unknown</dd>
      <dt>Appears in:</dt>
      <dd>
        <ul>
          <CharacterEpisode
            :key="episode"
            v-for="episode in character.episode"
            :episode-id="episode.split('/').slice(-1)"
          />
        </ul>
      </dd>
    </dl>
  </div>
</template>

<style scoped>
div {
  margin: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1,
img,
dl {
  margin-bottom: 10px;
}

img {
  width: 150px;
}

p {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

dt {
  font-weight: bold;
}

dd {
  margin-left: 40px;
}
</style>
