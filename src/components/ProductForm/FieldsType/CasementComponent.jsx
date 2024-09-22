// src/components/ProductForm/CasementComponent.jsx
import OneCasement from './OneCasement';
import TwoCasement from './TwoCasement';
import ThreeCasement from './ThreeCasement';
import FourCasement from './FourCasement';

const CasementComponent = ({ casementQuantity, formData, handleInputChange }) => {
    switch (casementQuantity) {
        case 1:
            return <OneCasement formData={formData} handleInputChange={handleInputChange} />;
        case 2:
            return <TwoCasement formData={formData} handleInputChange={handleInputChange} />;
        case 3:
            return <ThreeCasement formData={formData} handleInputChange={handleInputChange} />;
        case 4:
            return <FourCasement formData={formData} handleInputChange={handleInputChange} />;
        default:
            return null;
    };
};

export default CasementComponent;
