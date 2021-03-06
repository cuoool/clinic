<template>
  <div class="w-full">
    <div class="w-full flex flex-row items-center justify-between pt-4 pb-6">
      <h1 class="inline text-grey-darkest text-xl font-bold">
        <router-link class="text-blue hover:text-blue-light mr-2" to="/wards">
          <i class="fas fa-arrow-left"></i>
        </router-link>
        / Edit Ward
      </h1>
    </div>
    <BaseCard>
      <form @submit.prevent="save">
        <div class="flex items-baseline p-4 border-b border-white-grey">
          <label class="block text-grey-darker text-sm font-bold w-1/5">
            Name KH
          </label>
          <div class="w-2/5">
            <input
              class="appearance-none border rounded py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline w-full"
              v-model="form.name_kh"
              type="text"
              @input="$v.form.name_kh.$touch()"
            />
            <span class="block text-xs italic text-red" v-if="nameKhErrors.length > 0">
              {{ nameKhErrors[0] }}
            </span>
          </div>
        </div>
        <div class="flex items-baseline p-4 border-b border-white-grey">
          <label class="block text-grey-darker text-sm font-bold w-1/5">
            Name EN
          </label>
          <div class="w-2/5">
            <input
              class="appearance-none border rounded py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline w-full"
              v-model="form.name_en"
              type="text"
              @input="$v.form.name_en.$touch()"
            />
            <span class="block text-xs italic text-red" v-if="nameEnErrors.length > 0">
              {{ nameEnErrors[0] }}
            </span>
          </div>
        </div>
        <div class="flex items-center justify-end p-4">
          <base-button color="primary" :waiting="saving" type="submit">
            Upate
          </base-button>
        </div>
      </form>
    </BaseCard>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import httpClient from '@/http-client'

export default {
  name: 'WardEdit',
  async beforeRouteEnter(to, from, next) {
    if (to.params.ward === undefined) {
      let response = await httpClient.get(
        `/api/wards/${to.params.id}`,
        {},
        { showProgressBar: true }
      )
      to.params.ward = response.data.data
    }
    next()
  },
  props: {
    ward: {
      type: Object
    }
  },
  data() {
    return {
      form: {
        id: this.ward.id,
        name_kh: this.ward.name_kh,
        name_en: this.ward.name_en
      },
      saving: false
    }
  },
  validations: {
    form: {
      name_kh: { required },
      name_en: { required }
    }
  },
  computed: {
    nameKhErrors() {
      const errors = []
      if (!this.$v.form.name_kh.$dirty) return errors
      !this.$v.form.name_kh.required && errors.push('Required')
      return errors
    },
    nameEnErrors() {
      const errors = []
      if (!this.$v.form.name_en.$dirty) return errors
      !this.$v.form.name_en.required && errors.push('Required')
      return errors
    }
  },
  methods: {
    async save() {
      this.$v.$touch()
      if (this.$v.$error) {
        throw 'Validation failed'
      }

      this.saving = true
      try {
        await this.$store.dispatch('wards/update', this.form)
        this.$toasted.success('Role created successfully')
        this.$router.push('/wards')
      } catch (error) {
        this.$toasted.error(error.message)
      }
      this.saving = false
    }
  }
}
</script>
