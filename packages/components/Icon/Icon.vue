<script setup lang="ts">
import type { IconProps } from "./types";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { omit } from "lodash-es";
import { computed } from "vue";

defineOptions({
  name: "MelodyIcon",
  inheritAttrs: false,
});

const props = defineProps<IconProps>();
const filteredProps = computed(() => omit(props, ["type", "color"]));
const customStyle = computed(() => ({
  color: props.color,
}));
</script>

<template>
  <i 
    class="melody-icon"
    :class="[`melody-icon-${props.type}`]"
    :style="customStyle"
    v-bind="$attrs"
    >
    <font-awesome-icon v-bind="filteredProps" />
  </i>
</template>

<style>
@import './style.css';
</style>
