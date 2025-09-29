// 이메일 마스킹 처리하기

const email = "abc@gmail.com";

email.includes("@");

email.split("@");

email.split("@")[0];

email.split("@")[1];

let userMail = email.split("@")[0];

let company = email.split("@")[1];

let maskingMail = [];

maskingMail.push(userMail[0]);

maskingMail.push(userMail[1]);

maskingMail.push("*");

maskingMail.join("-");

maskingMail.join("") + "@" + company;
