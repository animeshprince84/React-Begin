const Contact = () => {
    return (
        <div>
            <h1 className="text-bold text-3xl m- p-4">Contact Us Page</h1>
            <form>
                <input type="text" className="border border-black m-2 p-2" placeholder="Name" />
                <input type="text" className="border border-black m-2 p-2" placeholder="Message" />
                <button className=" m-2 p-2 bg-green-200 rounded-lg">Sumbit</button>
            </form>
        </div>
    )
}

export default Contact;