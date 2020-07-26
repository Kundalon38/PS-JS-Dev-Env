import {expect} from 'chai';    /* mocha doesn't come with an assertion library, use chai's expect */
import jsdom from 'jsdom';
import fs from 'fs';            /* fs is the file system, is from node */

/* syntax above^ gives us a reference to expect */

describe('Our first test', ()=> {
  it('should pass',() => {
    /* the body of our test */
    expect(true).to.equal(true);
  })
})

describe('index.html', () => {git
  it('should say Hello World', (done) => {
    /* body of the test */
    const indexHtml = fs.readFileSync('./src/index.html', "utf-8");
    jsdom.env(indexHtml, function(err, window){
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("hello worlda");
      done();
      window.close();
    })
  })
})
