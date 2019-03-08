const didSend = (address) => !address.includes('barr');

const singleton = () => {
  const outbox = [];

  const sendEmail = (address, content) => {
    const successful = didSend(address);
    outbox.push({ address, content, successful });
    return successful;
  }

  return { sendEmail, outbox };
}

module.exports = singleton();
