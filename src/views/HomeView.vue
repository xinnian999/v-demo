<template>
  <div style="width: 100vw; height: 100vh">
    <FormDesign @add="onAdd" />
  </div>
</template>

<script lang="ts" setup>
import type { FormElement } from 'vue-form-craft';

const onAdd=(element:FormElement)=>{
console.log(element);

}
</script>
