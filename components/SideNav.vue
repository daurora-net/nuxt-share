<template>
 <div>
  <div class="left-padding">
   <img class="logo" src="../assets/img/logo.png" />
   <div class="flex icon-field" @click="$router.push('/')">
    <img class="icon" src="../assets/img/home.png" />
    <p>ホーム</p>
   </div>
   <div class="flex icon-field" @click="logout">
    <img class="icon" src="../assets/img/logout.png" />
    <p>ログアウト</p>
   </div>
  </div>
  <div class="share">
   <p>シェア</p>
   <textarea v-model="content" name="投稿内容"></textarea>
   <button @click="send" class="share_button">シェアする</button>
  </div>
 </div>
</template>

<script>
import firebase from "~/plugins/firebase";
export default {
 data() {
  return {
   content: "",
  };
 },
 methods: {
  logout() {
   firebase
    .auth()
    .signOut()
    .then(() => {
     alert("ログアウトが完了しました");
     this.$router.replace("/login");
    });
  },
  send() {
   if (!this.content) {
    alert("シェアする内容を入力してください");
    return;
   }

   firebase.auth().onAuthStateChanged(async (user) => {
    const { data } = await this.$axios.post(
     "http://18.179.28.155/api/v1/post",
     {
      user_id: user.uid,
      content: this.content,
     }
    );
    console.log(data); // 追加
    this.content = "";
    this.$emit("shared", data.post);
    alert("シェアしました");
   });
  },
 },
};
</script>