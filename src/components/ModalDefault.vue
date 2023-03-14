<template>
    <!-- Default Body -->
    <b-modal v-model="modalShow" hide-footer centered v-bind:title="this.modalTitre">
        <div class="d-block text-center" style="color: black">
            <span>
                {{ this.modalDescr }}
            </span>
        </div>
        <div class="d-flex justify-content-around" v-if="modalButton == 1">
            <b-button class="mt-3" variant="primary" id="addFacture" block @click="addFacture()">
                <b-spinner v-if="loading" variant="light" small label="Spinning"></b-spinner>
                <span v-if="loading" class="px-1">Chargement...</span>
                <span v-else>Ajouter</span>
            </b-button>
            <b-button class="mt-3" variant="danger" @click="hideModal()">
                Annuler
            </b-button>
        </div>
        <div class="d-flex justify-content-around" v-else-if="modalButton == 2">
            <b-button class="mt-3" variant="danger" id="deleteFacture" block @click="deleteFacture()">
                <b-spinner v-if="loading" variant="light" small label="Spinning"></b-spinner>
                <span v-if="loading" class="px-1">Chargement...</span>
                <span v-else>Suppression facture</span>
            </b-button>
            <b-button class="mt-3" variant="outline-danger" @click="hideModal()">
                Annuler
            </b-button>
        </div>
        <div class="d-flex justify-content-around" v-else-if="modalButton == 3">
            <b-button class="mt-3" variant="primary" id="addFournisseur" block @click="addFournisseur()">
                <b-spinner v-if="loading" variant="light" small label="Spinning"></b-spinner>
                <span v-if="loading" class="px-1">Chargement...</span>
                <span v-else>Ajouter</span>
            </b-button>
            <b-button class="mt-3" variant="danger" @click="hideModal()">
                Annuler
            </b-button>
        </div>
        <div class="d-flex justify-content-around" v-else-if="modalButton == 4">
            <b-button class="mt-3" variant="primary" id="addFournisseur" block @click="addReglement()">
                <b-spinner v-if="loading" variant="light" small label="Spinning"></b-spinner>
                <span v-if="loading" class="px-1">Chargement...</span>
                <span v-else>Enregistrer</span>
            </b-button>
            <b-button class="mt-3" variant="danger" @click="hideModal()">
                Annuler
            </b-button>
        </div>
    </b-modal>

    <!-- Return Body -->
    <b-modal v-model="modalVal" hide-footer centered v-bind:title="this.modalReturnTitle">
        <div id="on-click" style="color: black">
            <div class="d-block text-center" style="color: black">
                <span>
                    {{ this.modalReturn }}
                </span>
            </div>
        </div>
    </b-modal>
</template>

<script>
export default {
    name: "ModalDefaultComponent",
    data() {
        return {
            modalShow: false,
            modalVal: false,
            id: null,
            modalTitre: "",
            modalDescr: "",
            modalButton: null,
            modalReturnTitle: "",
            modalReturn: "",
            loading: false,
        };
    },
    methods: {
        showModal(modalTitre, modalDescr, modalButton, id) {
            this.modalShow = true;
            this.modalTitre = modalTitre;
            this.modalDescr = modalDescr;
            this.modalButton = modalButton;
            this.id = id;
        },

        hideModal() {
            this.modalShow = false;
        },

        deleteFacture() {
            this.loading = true;
            this.$emit("deleteFacture", this.id);
        },

        addFacture() {
            this.loading = true;
            this.$emit("addFacture");
        },

        addFournisseur() {
            this.loading = true;
            this.$emit("addFournisseur");
        },

        addReglement() {
            this.loading = true;
            this.$emit("addReglement");
        },

        error(modalReturn) {
            this.modalReturnTitle = "/ ERREUR /";
            this.modalReturn = modalReturn;
            this.modalShow = false;
            this.modalVal = true;
            this.loading = false;
        },

        success(modalReturnTitle, modalReturn) {
            this.modalReturnTitle = modalReturnTitle;
            this.modalReturn = modalReturn;
            this.modalShow = false;
            this.modalVal = true;
            this.loading = false;
        }
    },
};
</script>