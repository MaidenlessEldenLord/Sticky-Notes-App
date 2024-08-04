import AddButton from "../components/AddButton";
import colors from "../assets/colors.json";
import Color from "../components/Color";

const Controls = () => {
    return (
        <div id="controls">
            <AddButton />
            {colors.map((color) => (
                <Color key={color.id} color={color} />
            ))}
        </div>
    );
};

export default Controls;
