<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";
import { getButtonColor } from "../utils/colors";
import BaseIcon from "./BaseIcon.vue"

const props = defineProps({
  classes: {
    type: String,
    default:
      "inline-flex justify-center items-center whitespace-nowrap focus:outline-none transition-colors focus:ring duration-150 border cursor-pointer rounded border-gray-100 dark:border-slate-800 ring-gray-200 dark:ring-gray-500 bg-gray-100 text-black dark:bg-slate-800 dark:text-white hover:bg-gray-200 hover:dark:bg-slate-700 py-2 px-3 mr-3 last:mr-0 mb-3",
  },
  id: {
    type: String,
    default: null,
  },
  label: {
    type: [String, Number],
    required: false,
    default: null,
  },
  icon: {
    type: String,
    required: false,
    default: null,
  },
  iconSize: {
    type: [String, Number],
    default: null,
  },
  href: {
    type: String,
    default: null,
    required: false,
  },
  target: {
    type: String,
    default: null,
  },
  to: {
    type: [String, Object],
    default: null,
  },
  type: {
    type: String,
    default: null,
  },
  color: {
    type: String,
    default: "white",
  },
  as: {
    type: String,
    default: null,
  },
  small: Boolean,
  outline: Boolean,
  active: Boolean,
  disabled: Boolean,
  roundedFull: Boolean,
});

const is = computed(() => {
  if (props.href) {
    return "a";
  }
  if (props.to) {
    return RouterLink;
  }
  if (props.a) {
    return 'a'
  }
  return "button";
})

const computedType = computed(() => {
    if (is.value === 'button') {
        return props.type ?? 'button'
    }

    return null
})

const labelClass = computed(() => props.small && props.icon ? 'px-1' : 'px-2')

const componentClass = computed(() => {
    const base = [
        'inline-flex',
        'justify-center',
        'items-center',
        'whitespace-nowrap',
        'focus:outline-none',
        'transition-colors',
        'focus:ring',
        'duration-150',
        'border',
        props.disabled ? 'cursor-not-allowed' : 'cursor-pointer',
        props.roundedFull ? 'rounded-full' : 'rounded',
        getButtonColor(props.color, props.outline, !props.disabled, props.active)
    ]
    if(!props.label && props.icon) {
        base.push('p-1')
    } else if (props.small) {
        base.push('text-sm', props.roundedFull ? 'px-3 py-1' : 'p-1')
    } else {
        base.push('py-2', props.roundedFull ? 'px-6' : 'px-3')
    }

    if (props.disabled) {
        base.push(props.outline ? 'opacity-50' : 'opacity-70')
    }

    return base
})
</script>

<template>
  <component 
    :is="is" 
    :class="componentClass" 
    :id="id"
    :href="href"
    :type="computedType"
    :target="target"
    :to="to"
    :disabled="disabled"
    >
    <BaseIcon v-if="icon" :path="icon" :size="iconSize" />
    <span v-if="label" :class="labelClass">{{ label }}</span>
  </component>
</template>
