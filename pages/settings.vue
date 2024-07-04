<script setup>
definePageMeta({
    title: "default",
    description: "default",
    layout: "default",
});
</script>
<template>
    <div class="SettingsPage">
        <h1>Settings</h1>
    </div>
    <ButtonHelp />
    <div>
        <ul>
        <li class="button">Preferences</li>
        <li class="button">Notifications</li>
        <li class="button">Subscriptions</li>
        <li class="button">Invite a friend</li>
        </ul>
    </div>
    <div>Theme</div>
    <div>Feedback</div>
    <div>Terms of Service</div>
    <div>Privacy Policy</div>
    <div>Cookie Policy</div>
    <div>Legal</div>
    <div>API</div>
    <div>Open Source</div>
    <div>Version: 0.1</div>
    <div>Support</div>
    <div>FAQ</div>
    <div>Community</div>
    <div>Blog</div>
    <div class="socialNetworksLinks">
        <div>Twitter</div>
        <div>Facebook</div>
        <div>Instagram</div>
        <div>LinkedIn</div>
        <div>Youtube</div>
        <div>Reddit</div>
        <div>Discord</div>
        <div>Telegram</div>
        <div>Slack</div>
        <div>GitHub</div>
    </div>
    <div>Account</div> 
    <div>Security</div>
    <div>Privacy</div>
    <div style="background-color: rgb(202, 202, 202)">
    <div><ul>
        <li class="button">Language</li>
        <li class="button">Contact us</li>
        <li class="button">Help</li>
        <li class="button">Informations</li>
        <li class="button">Disconnection</li>
    </ul></div>
  </div>
</template>
<style scoped>
.SettingsPage {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #333333;
    color:#ffffff;
}
.socialNetworksLinks {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: #333333;
    color:#ffffff;
}
.socialNetworksLinks div {
    margin: 0.3rem 1rem;
}
.button {
    display: inline-block;
    padding: 0.5em 1em;
    text-decoration: none;
    background: #a0a0a0;
    color: #FFF;
    border-bottom: solid 4px #4d4d4d;
    border-radius: 3px;
}
</style>