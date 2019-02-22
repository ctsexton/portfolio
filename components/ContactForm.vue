<template lang="pug">
  fragment
    v-flex(xs11 lg8)
      v-card.my-5(light color="grey lighten-4" elevation="10" tile)
        v-layout.ma-0.pa-0(wrap justify-center)
          v-img(contain width="100%" max-width="320px" src="inspired_portrait.jpg")
          v-flex.pa-0.ma-0(grow)
            v-layout.pa-0.ma-0(wrap justify-center)
              v-layout.px-3.ma-0(justify-end align-center)
                v-hover
                  a(href="https://github.com/ctsexton" slot-scope="{ hover }")
                    v-icon.ma-2(size="60" :color="`grey darken-${hover ? 4 : 3}`") fab fa-github
                v-hover
                  a(href="https://www.linkedin.com/in/ctsexton/" slot-scope="{ hover }")
                    v-icon.ma-2(size="60" :color="`grey darken-${hover ? 4 : 3}`") fab fa-linkedin
              v-flex.pa-0(xs12 v-if="submitStatus != 'OK'")
                v-form.pa-3.transparent.standard-card(width="100%" left)
                  v-text-field(
                    v-model="name" 
                    :error-messages="nameErrors"
                    @input="$v.name.$touch()"
                    @blur="$v.name.$touch()"
                    label="Name" 
                    required)
                  v-text-field(
                    v-model="email" 
                    :error-messages="emailErrors"
                    @input="$v.email.$touch()"
                    @blur="$v.email.$touch()"
                    label="Email" 
                    required)
                  v-textarea(
                    v-model="message" 
                    :error-messages="messageErrors"
                    @input="$v.message.$touch()"
                    @blur="$v.message.$touch()"
                    label="Message" 
                    required)
                v-btn.mx-0(@click="submit" left large color="success") Submit
              v-card-text.display-2.text-xs-center.py-5(v-else) Thanks for your message!
</template>
<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'
export default {
  mixins: [validationMixin],
  validations: {
    name: { required, maxLength: maxLength(30) },
    email: { required, email },
    message: { required, maxLength: maxLength(500) }
  },
  data () {
    return {
      name: '',
      email: '',
      message: '',
      submitStatus: null
    }
  },
  methods: {
    submit: function () {
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.$axios.$post(this.formUrl,
          {
            form: {
              Name: this.name,
              Email: this.email,
              Message: this.message
            }
          }
        )
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
        }, 500)
      }
    }
  },
  computed: {
    formUrl: function () {
      const apiUrl = 'https://gh-backend.camsexton.com'
      const token = '84654bf365c06b61021b0190842a08'
      return `${apiUrl}/api/forms/submit/Contact?token=${token}`
    },
    nameErrors () {
      const errors = []
      if (!this.$v.name.$dirty) return errors
      !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
      !this.$v.name.required && errors.push('Name is required.')
      return errors
    },
    emailErrors () {
      const errors = []
      if (!this.$v.email.$dirty) return errors
      !this.$v.email.email && errors.push('Must be valid e-mail')
      !this.$v.email.required && errors.push('E-mail is required')
      return errors
    },
    messageErrors () {
      const errors = []
      if (!this.$v.message.$dirty) return errors
      !this.$v.message.maxLength && errors.push('500 characters max.')
      !this.$v.message.required && errors.push('Message is required.')
      return errors
    }
  }
}
</script>
