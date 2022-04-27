const is_autholized = response_data["is_autholized"];

const login_info_text = document.getElementById("login_info").innerText;
if (is_autholized) {
    login_info_text = "ログイン済みです";
} else {
    login_info_text = "ログインしてください";
}