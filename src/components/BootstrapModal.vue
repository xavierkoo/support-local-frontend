<template>
    <div class="BootModal">
        <div
            class="modal shadowbox"
            tabindex="-1"
        >
            <div
                class="modal-dialog"
                role="document"
            >
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title fw-bold">
                            Send your queries to the merchant!
                        </h5>
                        <button
                            type="button"
                            class="btn-close"
                            data-dismiss="modal"
                            aria-label="Close"
                            @click="closeModal"
                        />
                    </div>
                    <form
                        ref="form"
                        @submit.prevent="sendEmail"
                    >
                        <div class="modal-body">
                            <input
                                id="emailMerchant"
                                :value="merchantEmail"
                                type="email"
                                name="merchant_email"
                                class="form-control"
                                hidden
                            >
                            <label
                                for="email"
                                class="form-label"
                            >Email:</label>
                            <input
                                id="emailUser"
                                v-model="userEmail"
                                type="email"
                                name="user_email"
                                class="form-control"
                            >
                            <label
                                for="subject"
                                class="form-label"
                            >Subject:</label>
                            <input
                                id="subject"
                                v-model="subject"
                                type="text"
                                name="subject"
                                class="form-control"
                            >
                            <label
                                for="queries"
                                class="form-label"
                            >Queries:</label>
                            <textarea
                                id="queries"
                                v-model="queries"
                                type="text"
                                name="queries"
                                class="form-control"
                                rows="6"
                            />
                        </div>
                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn cancelBtnDesign"
                                @click="closeModal"
                            >
                                Close
                            </button>
                            <button
                                type="submit"
                                class="btn mainBtnDesign"
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import emailjs from "@emailjs/browser";
export default {
  props: {
    merchantEmail: {
      type: String,
      default: "",
    },
  },
  emits: ["close-modal-event"],
  data() {
    return {
      queries: "",
      subject: "",
      userEmail: "",
    };
  },
  methods: {
    closeModal() {
      this.$emit("close-modal-event");
    },
    saveChanges() {
      this.closeModal();
    },
    sendEmail() {
      if (
        this.subject.trim() == "" ||
        this.queries.trim() == "" ||
        this.userEmail.trim() == ""
      ) {
        alert("Please make sure you fill up the form correctly");
      } else {
        emailjs
          .sendForm(
            "SupportLocal2022",
            "queriesWAD2",
            this.$refs.form,
            "8Ofr7mrBSFNOFqcER"
          )
          .then(
            (result) => {
              console.log("SUCCESS!", result.text);
              alert(
                "Your queries have been successfully sent to the merchant!"
              );
              this.queries = "";
              this.subject = "";
              this.userEmail = "";
            },
            (error) => {
              console.log("FAILED...", error.text);
            }
          );
      }
    },
  },
};
</script>

<style scoped>
@import "../assets/style/global.css";
.modal {
  display: block;
}
</style>
