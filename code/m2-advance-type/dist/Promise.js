"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
{
    const randomStudent = () => {
        return new Promise((resolve, reject) => {
            const names = ["hashi ", "khushi", "anondo", "sukhi", "xoss"];
            const randomRoll = Math.ceil(Math.random() * 10);
            if (randomRoll < 5) {
                resolve({ name: names[randomRoll], roll: randomRoll });
            }
            else {
                reject("Try again");
            }
        });
    };
    const getAStudent = () => __awaiter(void 0, void 0, void 0, function* () {
        const student = yield randomStudent();
        // console.log(student);
        return student;
    });
    getAStudent().then((data) => console.log(data));
}
