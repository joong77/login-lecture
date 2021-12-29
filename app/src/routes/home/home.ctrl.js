"use strict"

const users = {
    id: ["joongs1", "개발자", "홍길동"],
    psword: ["1234", "12345", "12345"],
}

const output = {
    hello: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    },

};

const process = {
    login: (req, res) => {
        const id = req.body.id,
          psword = req.body.psword;
        
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword) {
                return res.json({
                    success: true,
                });
            }
        }

        return res.json({
            success: false,
            msg: "로그인에 실패하셨습니다!",
        });
    },
}

module.exports = {
    output,
    process,
};

