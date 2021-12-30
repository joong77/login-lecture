"use strict";


const id = document.querySelector("#id"),
    nickName = document.querySelector("#name"),
    psword = document.querySelector("#psword"),
    confirmPsword = document.querySelector("#confirm-psword"),
    registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click", register);

function register() {
    if (!id.value) return alert("아이디를 입력하세요!");

    if (psword.value !== confirmPsword.value) return alert("비밀번호 확인이 비밀번호와 다릅니다!");
    
    const req = {
        id: id.value,
        name: nickName.value,
        psword: psword.value,
    };

    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json()) //promis object return
    .then((res) => {
        if(res.success) {
          location.href = "/";
        } else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error("회원가입 중 에러 발생");
    })
    
}


