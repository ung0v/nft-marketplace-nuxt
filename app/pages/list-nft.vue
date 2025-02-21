<template>
  <div class="container">
    <div class="p-4 pb-20 md:px-10">
      <div class="flex flex-col gap-4">
        <h2 class="mb-4 text-center text-3xl">
          List NFT
        </h2>
        <Form
          :initial-values
          :resolver
          class="flex w-full flex-col gap-4 self-center sm:w-80"
          @submit="onFormSubmit"
        >
          <FormField
            v-slot="$field"
            name="username"
            initial-value=""
            class="flex flex-col gap-1"
          >
            <InputText
              type="text"
              placeholder="Username"
            />
            <Message
              v-if="$field?.invalid"
              severity="error"
              size="small"
              variant="simple"
            >
              {{ $field.error?.message }}
            </Message>
          </FormField>
          <FormField
            v-slot="$field"
            name="details"
            class="flex flex-col gap-1"
          >
            <Textarea placeholder="Details" />
            <Message
              v-if="$field?.invalid"
              severity="error"
              size="small"
              variant="simple"
            >
              {{ $field.error?.message }}
            </Message>
          </FormField>
          <Button
            type="submit"
            severity="secondary"
            label="Submit"
          />
        </Form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { zodResolver } from '@primevue/forms/resolvers/zod'

import { z } from 'zod'

const toast = useToast()

const initialValues = reactive({
  username: '',
  details: '',
})

const resolver = zodResolver(
  z.object({
    details: z.string().min(1, { message: 'Details is required via Form Resolver.' }),
    username: z.string().min(1, { message: 'Username is required via FORM.' }),
  }),
)

const onFormSubmit = (form) => {
  console.log(form)
  if (form.valid) {
    console.log(form.values)
    toast.add({ severity: 'contrast', summary: 'Form is submitted.', life: 3000 })
  }
}
</script>

<style>

</style>
