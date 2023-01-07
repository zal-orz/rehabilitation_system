  //接受二进制数组，转化为Base64编码
  export default function transformArrayBufferToBase64 (buffer) {            
    var binary = '';            
    var bytes = new Uint8Array(buffer);            
    for (var len = bytes.byteLength, i = 0; i < len; i++) {                
        binary += String.fromCharCode(bytes[i]);            
    }            
    return window.btoa(binary);        
  }