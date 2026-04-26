import './../assests/batman.svg'
import './../assests/lazy.svg'
import './../assests/cloud.svg'

export const DynamicAvatar = ({ img }) => {
    return (
        <div className="d-flex justify-content-center mb-3">
            <img
                src={img}
                alt="profile avatar"
                className="rounded-circle border border-secondary shadow-sm"
                style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover"
                }} 
            />
        </div>
    );
};