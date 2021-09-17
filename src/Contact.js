const Contact = props => {
    return (
        <main>
            <header>Contact Me</header>
            <center><article>
                <form>
                    <label for="name">Name: </label>
                    <input type="text" placeholder="Enter your name" />
                    <br />
                    <br />
                    <label for='message'> Message: </label>
                    <input type="textarea" placeholder="Leave a message ;-)"  />
                    <br />
                    <br />
                    <input type='submit' value="Contact" />
                </form>
            </article></center>
        </main>
    );
}

export default Contact;