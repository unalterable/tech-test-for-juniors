const { expect } = require('chai');

const notifyOfExamResults = require('../index.js');
const { outbox } = require('../emailer.js');

const byAddress = desiredAddress => email => email.address === desiredAddress;

describe('Notify Of Exam Results', () => {
  let report;
  let barrysEmail;
  let kevinsEmail;
  let rutasEmail;
  let marysEmail;

  before(() => {
    report = notifyOfExamResults();
    barrysEmail = outbox.find(({address}) => address.startsWith('barry'))
    kevinsEmail = outbox.find(({address}) => address.startsWith('kevin'))
    rutasEmail = outbox.find(({address}) => address.startsWith('ruta'))
    marysEmail = outbox.find(({address}) => address.startsWith('mary'))
  })

  it('should send 4 emails', () => {
    expect(outbox).to.have.length(4);
  });

  it('should give a list of all failed emails', () => {
    expect(report).to.deep.equal(['barry@b.com']);
  });

  it('should try to send one email to Barry', () => {
    expect(outbox.filter(byAddress('barry@b.com'))).to.have.length(1);
  });

  it('should have sent Barry a congrats email with his score', () => {
    expect(outbox.find(byAddress('barry@b.com')))
      .to.contain({ content: 'Congratulations Barry, you passed your exams with 89%!' });
  });

  it('should try to send an email to Kevin', () => {
    expect(outbox.filter(byAddress('kevin@b.com')))
      .to.have.length(1);
  });

  it('should have sent Kevin a bad luck email with his score', () => {
    expect(outbox.find(byAddress('kevin@b.com')))
      .to.contain({ content: 'Bad luck Kevin, you failed your exams with 42%.' });
  });

  it('should try to send an email to Ruta', () => {
    expect(outbox.filter(byAddress('ruta@b.com')))
      .to.have.length(1);
  });

  it('should have sent Ruta a congrats email email with her score', () => {
    expect(outbox.find(byAddress('ruta@b.com')))
      .to.contain({ content: 'Congratulations Ruta, you passed your exams with 99%!' });
  });

  it('should try to send an email to Mary', () => {
    expect(outbox.filter(byAddress('mary@b.com')))
      .to.have.length(1);
  });

  it('should have sent Mary a congrats email email with her score', () => {
    expect(outbox.find(byAddress('mary@b.com')))
      .to.contain({ content: 'Congratulations Mary, you passed your exams with 54%!' });
  });
});
