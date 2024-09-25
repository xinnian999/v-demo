<template>
  <Date v-model="time" type="datetime" placeholder="Pick a day" />

  <br />
  <br />
  <br />
  <br />
  <FormRender v-model="formValues" :schema="schema" ref="formRef" />
  <el-button @click="handleSubmit">提交</el-button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { FormSchema, FormRenderInstance } from 'vue-form-craft'
import { ElDatePicker as Date } from 'element-plus'

const formRef = ref<FormRenderInstance>()

const formValues = ref({})

const time = ref()

const schema: FormSchema = {
  labelWidth: 150,
  labelAlign: 'right',
  size: 'default',
  items: [
    {
      label: '日期选择器',
      component: 'DatePicker',
      props: {
        type: 'datetime',
        placeholder: '请选择日期',
        clearable: false
      },
      designKey: 'design-n8zT',
      name: 'form-6jSi'
    }
  ]
}

const handleSubmit = async () => {
  await formRef.value?.validate()
  alert(JSON.stringify(formValues.value, null, 2))
}
</script>
