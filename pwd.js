//Print working directory

function pwd() {
  let dir = process.cwd();
  process.stdout.write(`${dir}`);
  process.stdout.write('\nprompt > ');
}

//Module export
module.exports = pwd;
