import {useState} from 'react';
import QRCode from 'react-qr-code';
import './styles.css';

const QRCodeGenerator = () => {
    
    const [qrCode, setQrCode] = useState('');
    const [input, setInput] = useState('');

    const handleGenerateQrCode = () => {
        setQrCode(input);
        setInput('');
    };

    const handleOnChage = (event) => {
        setInput(event.target.value);
    }
    
    return(
        <div className='container'>
            <h1>QR Code Generator</h1>
            
            <div className='qr-container'>
                <QRCode 
                    id="qr-code-value" 
                    value={qrCode} 
                    size="250" 
                    bgColor="rgb(0, 153, 255)"
                    fgColor="white"
                />
            </div>

            <div className='input-container'>
                <input 
                    onChange={(e) => handleOnChage(e)} 
                    type="text" name="qr-code" 
                    placeholder="Enter your value here"
                    value={input}
                />
                <button 
                    disabled={input && input.trim() !== '' ? false : true} 
                    onClick={handleGenerateQrCode}>Generate</button>
            </div>
        </div>
    );
};

export default QRCodeGenerator;