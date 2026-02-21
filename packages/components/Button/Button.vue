<script setup lang="ts">
import { ref, computed, inject } from "vue";
import type { ButtonProps, ButtonEmits, ButtonInstance } from "./types";
import { throttle } from "lodash-es";
import MelodyIcon from "../Icon/Icon.vue";
import { BUTTON_GROUP_CTX_KEY } from "./contants";

defineOptions({
  name: "MelodyButton",
});
const props = withDefaults(defineProps<ButtonProps>(), {
  tag: "button",
  nativeType: "button",
  useThrottle: true,
  throttleDuration: 500,
});

const emit = defineEmits<ButtonEmits>();

const slots = defineSlots();
const ctx = inject(BUTTON_GROUP_CTX_KEY, void 0);
const _ref = ref<HTMLButtonElement>();

const size = computed(() => ctx?.size ?? props?.size ?? "");
const type = computed(() => ctx?.type ?? props?.type ?? "");
const disabled = computed(() => ctx?.disabled || props?.disabled || false);

const iconStyle = computed(() => ({
  marginRight: slots.default ? "6px" : "0",
}));

const handleBtnClick = (e: MouseEvent) => emit("click", e);

const handleBtnClickThrottled = throttle(
  handleBtnClick,
  props.throttleDuration,
  {
    trailing: true,
  }
);

defineExpose<ButtonInstance>({
  ref: _ref,
});
</script>

<template>
  <component
    :is="tag"
    ref="_ref"
    class="melody-button"
    :auto-focus="autoFocus"
    :type="tag === 'button' ? nativeType : undefined"
    :disabled="disabled || loading"
    :class="{
      [`melody-button--${type}`]: type,
      [`melody-button--${size}`]: size,
      'is-circle': circle,
      'is-plain': plain,
      'is-round': round,
      'is-disabled': disabled,
      'is-loading': loading,
    }"
    @click="(e: MouseEvent) => useThrottle ? handleBtnClickThrottled(e) : handleBtnClick(e)"
  >
    <template v-if="loading">
      <slot name="loading">
        <MelodyIcon
          class="loading-icon"
          :icon="loadingIcon ?? 'spinner'"
          :style="iconStyle"
          size="1x"
          spin
        />
      </slot>
    </template>
    <MelodyIcon
      v-if="icon && !loading"
      :icon="icon"
      :style="iconStyle"
      size="1x"
    />
    <slot></slot>
  </component>
</template>

<style scoped>
@import "./style.css";
</style>
