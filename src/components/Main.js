function Main() {
    return (
        <div className="container text-center pt-3 fs-5">
            <div className="row">
                <div className="col">
                    <a className="btn btn-primary" role="button" href="/create">Сreate a note</a>
                </div>
                <div className="col">
                    <a className="btn btn-primary" role="button" href="/note">Watch a note</a>
                </div>
            </div>

            <div className="text-start pt-3 ">
                <p><b>ShareNotes</b> – service for exchanging notes. Create a note, send a link to the note and your friend can view it.
                    After viewing the note will be removed (or after 15 minutes from the moment of creation).</p>
                <p>How to make a note? </p>
                <ul>
                    <li>Follow the link</li>
                    <li>Insert text and click Create</li>
                    <li>Send the generated address to a friend!</li>
                </ul>
                <p>How to read a note? Go to the URL you sent, or enter the address here.</p>
            </div>
        </div>
    );
}

export default Main;