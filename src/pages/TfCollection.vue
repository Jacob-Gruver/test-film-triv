<template>
  <div
    class="TfCollection pb-3 pt-5 mt-5 flex-grow-1 d-flex flex-column align-items-center justify-content-center"
  >
    <div class="row">
      <div class="col">
        <form>
          <div class="row p-2">
            <div class="col-xs-2">
              <input
                type="text"
                name="name"
                title="name"
                class="form-control"
                placeholder="Add name"
                data-maxlength="16"
                v-model="state.newTransformer.name"
              />
            </div>
          </div>
          <div class="row p-2">
            <div class="col-xs-4">
              <input
                type="text"
                name="description"
                title="description"
                class="form-control"
                placeholder="Add description"
                data-maxlength="150"
                v-model="state.newTransformer.description"
              />
            </div>
          </div>
          <div class="row p-2">
            <div class="col-xs-4">
              <input
                type="text"
                name="form"
                title="form"
                class="form-control"
                placeholder="Add form"
                data-maxlength="150"
                v-model="state.newTransformer.form"
              />
            </div>
          </div>
          <div class="row p-2">
            <div class="col-xs-4">
              <input
                type="text"
                name="strength"
                title="strength"
                class="form-control"
                placeholder="Add strength"
                data-maxlength="150"
                v-model="state.newTransformer.specs.strength"
              />
            </div>
          </div>
          <div class="row p-2">
            <div class="col-xs-4">
              <input
                type="text"
                name="intelligence"
                title="intelligence"
                class="form-control"
                placeholder="Add intelligence"
                data-maxlength="150"
                v-model="state.newTransformer.specs.intelligence"
              />
            </div>
          </div>
          <div class="row p-2">
            <div class="col-xs-4">
              <input
                type="text"
                name="speed"
                title="speed"
                class="form-control"
                placeholder="Add speed"
                data-maxlength="150"
                v-model="state.newTransformer.specs.speed"
              />
            </div>
          </div>
          <div class="row p-2">
            <div class="col-xs-4">
              <input
                type="text"
                name="endurance"
                title="endurance"
                class="form-control"
                placeholder="Add endurance"
                data-maxlength="150"
                v-model="state.newTransformer.specs.endurance"
              />
            </div>
          </div>
          <div class="row p-2">
            <div class="col-xs-4">
              <input
                type="text"
                name="rank"
                title="rank"
                class="form-control"
                placeholder="Add rank"
                data-maxlength="150"
                v-model="state.newTransformer.specs.rank"
              />
            </div>
          </div>
          <div class="row p-2">
            <div class="col-xs-4">
              <input
                type="text"
                name="courage"
                title="courage"
                class="form-control"
                placeholder="Add courage"
                data-maxlength="150"
                v-model="state.newTransformer.specs.courage"
              />
            </div>
          </div>
          <div class="row p-2">
            <div class="col-xs-4">
              <input
                type="text"
                name="firepower"
                title="firepower"
                class="form-control"
                placeholder="Add firepower"
                data-maxlength="150"
                v-model="state.newTransformer.specs.firepower"
              />
            </div>
          </div>
          <div class="row p-2">
            <div class="col-xs-4">
              <input
                type="text"
                name="skill"
                title="skill"
                class="form-control"
                placeholder="Add skill"
                data-maxlength="150"
                v-model="state.newTransformer.specs.skill"
              />
            </div>
          </div>
          <div class="row p-2">
            <div class="col-xs-4">
              <input
                type="text"
                name="function"
                title="function"
                class="form-control"
                placeholder="Add function"
                data-maxlength="150"
                v-model="state.newTransformer.function"
              />
            </div>
          </div>
          <div class="row p-2">
            <div class="col-xs-4">
              <input
                type="text"
                name="image"
                title="image"
                class="form-control"
                placeholder="Add image"
                data-maxlength="150"
                v-model="state.newTransformer.imgURL"
              />
            </div>
          </div>
          <input
            type="checkbox"
            title="affiliation"
            class="form-control"
            v-model="state.newTransformer.affiliation"
            name="affiliation"
          />
          <p class="text-light">Autobot or Decepticon?</p>
          <button type="button" @click="addArobot" class="btn btn-primary pt-2">
            Create
          </button>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <Transformers
          v-for="transformer in state.transformers"
          :key="transformer.id"
          :tf-prop="transformer"
        />
      </div>
    </div>
  </div>
</template>

<script>
// import { computed, onMounted, reactive } from 'vue'
// import { logger } from '../utils/Logger'
// import { robotService } from '../services/RobotService'
// import { useRouter } from 'vue-router'
// import { AppState } from '../AppState'

export default {
  name: 'TfCollection',
  // setup() {
  //   const router = useRouter()
  //   const state = reactive({
  //     transformers: computed(() => AppState.transformers),
  //     account: computed(() => AppState.account),
  //     newTransformer: {
  //       specs: {}
  //     }
  //   })
  //   onMounted(() => {
  //     try {
  //       robotService.getRobots()
  //     } catch (error) {
  //       logger.error(error)
  //     }
  //   })
  //   return {
  //     state,
  //     async addArobot() {
  //       try {
  //         const _id = await robotService.addArobot(state.newTransformer)
  //         router.push({ name: 'TfTechSpec', id: _id })
  //       } catch (error) {
  //         logger.error(error)
  //       }
  //     }
  //   }
  // }
}
</script>
<style scoped lang="scss">
.TfCollection {
  background-image: url(../assets/img/bg-temp.jpg);
}
</style>