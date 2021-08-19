<script>
export default {
  props: {
    textKey: {
      type: String,
      required: true,
    },
  },
}
</script>

<template>
  <span>{{ $t(textKey) }}</span>
</template>
