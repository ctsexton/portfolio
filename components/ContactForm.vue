<template lang="pug">
  fragment
    v-flex(xs12 grow)
      v-card.my-0(light color="grey lighten-4" elevation="10")
        v-layout(wrap)
          v-flex.pa-0(xs12)
            v-img(src="profilepic.jpg")
          v-flex(grow)
            v-layout.pa-2(justify-end)
              v-flex.mx-1(shrink)
                v-icon(size="50" color="grey darken-3") fab fa-github
              v-flex.mx-1(shrink)
                v-icon(size="50" color="grey darken-3") fab fa-linkedin
            div(v-if="submitStatus != 'OK'")
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
              v-btn.ma-0.pa-0(@click="submit" left large color="success") Submit
            v-card-text.display-2.text-xs-center.py-5(v-else) Thanks for your message!
    v-flex(xs8 grow)
      v-card.text-xs-center
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
        /*
        this.$axios.$post(this.formUrl,
          {
            form: {
              Name: this.name,
              Email: this.email,
              Message: this.message
            }
          }
        )
        */
        console.log(this.name)
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
        }, 500)
      }
    }
  },
  computed: {
    formUrl: function () {
      /*
      const apiUrl = process.env.cockpit.realUrl
      const token = process.env.cockpit.apiToken
      return `${apiUrl}/api/forms/submit/Contact?token=${token}`
      */
      return ''
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
