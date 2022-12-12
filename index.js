#! /usr/bin/env node
import chalkAnimation from 'chalk-animation';
const sleep = () => new Promise((res, rej) => setTimeout(res, 2000));
async function welcome() {
    const title = chalkAnimation.rainbow('\tWelcome to my Student Management System');
    await sleep();
    title.stop();
}
welcome();
