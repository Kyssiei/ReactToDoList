


function CheckBox ({checked, onChange}) {
    // const [checked, setChecked] = useState();
    
    return(
        <div>
            <input type="checkbox" checked={checked} onchange={onChange} />
        </div>
    )

}

export default CheckBox