<script setup lang="ts">
// Supabase authentification:
// const client = useSupabaseClient()
// const user = useSupabaseUser()

// watchEffect(()=>{
//   if(user.value){
//     return navigateTo('/')
//   }
// })

// const login = async(prov)=>{
//   const{data,error}= await client.auth.signInWith0Auth({
//     provider: prov,
//     redirectTo: window.location.origin
//   })
//   if (error) console.error('error: ', error)
// }

const form = reactive({ email: 'mail@example.com', password: 'password' })
</script>

<template>
  <div id="AuthPage" class="p-4">
    <div class="p-4">
      <div class="flex items-center justify-center gap-2.5 p-4">
        <img class="w-[35px]" src="assets/Logo_Color.png">
        <span class="font-bold text-xl text-white">Strade App</span>
      </div>
      <div class="max-w-[350px] mx-auto px-2 text-white">
        <div class="text-center mb-4 mt-2">Login / Register</div>
        <button class="flex items-center justify-center gap-3 p-1 w-full border rounded-full text-md font-semibold">
          <div class="flex items-center gap-2 justify-center">
            <img class="w-full max-w-[25px] rounded-full" src="assets/github-mark-white.png">
            Github
          </div>
        </button>
      </div>
    </div>
  </div>

  <!-- Email and Code Registration -->
  <div class="w-full flex flex-col gap-y-2">
    <UCard :ui="{ body: { base: 'grid grid-cols-3' } }">
      <div class="space-y-2">
        <UFormGroup label="Email" name="email">
          <UInput v-model="form.email" />
        </UFormGroup>

        <UFormGroup label="Password" name="password">
          <UInput v-model="form.password" type="password" />
        </UFormGroup>

        <UButton label="Login" color="gray" block />
      </div>

      <UDivider label="OR" orientation="vertical" />

      <div class="space-y-2 flex flex-col justify-center">
        <UButton color="black" label="Login with GitHub" icon="i-simple-icons-github" block />
        <UButton color="black" label="Login with Google" icon="i-simple-icons-google" block />
        <UButton color="black" label="Login with CryptoWallet" icon="i-simple-icons-google" block />
      </div>
    </UCard>

    <!-- <UCard>
      <div class="space-y-2">
        <UFormGroup label="Email" name="email">
          <UInput v-model="form.email" />
        </UFormGroup>

        <UFormGroup label="Password" name="password">
          <UInput v-model="form.password" type="password" />
        </UFormGroup>

        <UButton label="Login" color="gray" block />

        <UDivider label="OR" />

        <UButton color="black" label="Login with GitHub" icon="i-simple-icons-github" block />
        <UButton color="black" label="Login with Google" icon="i-simple-icons-google" block />
      </div>
    </UCard> -->
  </div>
</template>