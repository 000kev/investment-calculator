
export default function Input({variables, onUpdate}) {
    const changeHandler = (event) => {
        onUpdate(event.target.id, event.target.value);
    }
    return (
        <section className="input-group" id="user-input">
            <div>
                <label id="initial">Initial Investment</label>
                <input type="number" required id="initial" onChange={changeHandler} value={variables.initial}></input>

                <label id="return">Expected Return</label>
                <input type="number" required id="return"  onChange={changeHandler} value={variables.return}></input>
            </div>
            <div>
                <label id="annual">Annual Investment</label>
                <input type="number" required id="annual"  onChange={changeHandler} value={variables.annual}></input>

                <label id="duration">Duration</label>
                <input type="number" required id="duration" onChange={changeHandler} value={variables.duration}></input>
            </div>
        </section>
    );
}