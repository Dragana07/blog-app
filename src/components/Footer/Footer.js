import React from "react";
import "./footer.style.css";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="footer1">
        <h3>Footer</h3>
        <p>
          These are short, famous texts in English from classic sources like the
          Bible or Shakespeare. Some texts have word definitions and
          explanations to help you.           
        </p>
        <form>
         
          <div class="formGroup">
            <label>Email:</label>
            <input type="text" name="email"></input>
            <button type="submit">Subscribe</button>
          </div>

          

        </form>
      </div>
      <div className="footer2">
        <h3>Footer</h3>
        <p>
          raditionally, a textis understood to be a piece of written or spoken
          material in its primary form (as opposed to a paraphrase or summary).
          A text is any stretch of language that can be understood in context.
          It may be as simple as 1-2 words (such as a stop sign) or as complex
          as a novel. Any sequence of sentences that belong together can be
          considered a text. Text refers to content rather than form
        </p>
      </div>
      <div className="footer3">
        <h3>Footer</h3>
        <p>Some more intormation</p>
      </div>
    </div>
  );
}

export default Footer;
