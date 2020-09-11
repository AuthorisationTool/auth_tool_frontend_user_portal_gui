import { device } from "./BleGyroService";


export function readAccValueFromBLE() {
    const SERVICE_ACC_UUID = "4fafc201-1fb5-459e-8fcc-c5c9c331914b";
    const CHARACTERISTIC_ACCX_UUID = "002c6092-3f0d-4370-a45d-e3f5bccd6938";
    const CHARACTERISTIC_ACCY_UUID = "dfae7e37-f5ac-4380-b456-b15471004470";
    const CHARACTERISTIC_ACCZ_UUID = "c257b861-20ac-47fd-9a0b-7182164f8a8b";
    let acc = {
        accx: '',
        accy: '',
        accz: ''
    }
    try {
        console.log('Requesting Bluetooth Device...');
        device = await navigator.bluetooth.requestDevice({
          filters: [
            { services: [SERVICE_ACC_UUID] },
            { name: ["m5-stack"] },
          ],
        });
      
        console.log('Connecting to GATT Server...');
        const server = await device.gatt.connect();
    
        console.log('Getting Service...');
        const service = await server.getPrimaryService(SERVICE_ACC_UUID);
    
        console.log('Reading Characteristics...');
          const myCharacteristic1 = await service.getCharacteristic(CHARACTERISTIC_ACCX_UUID);
          const value = await myCharacteristic1.readValue();
          const decoder = new TextDecoder('utf-8');
          console.log(decoder.decode(value));
          acc[accx] = decoder.decode(value);

        
          
          console.log('Reading Characteristics...');
          const myCharacteristic2 = await service.getCharacteristic(CHARACTERISTIC_ACCY_UUID);
          const value = await myCharacteristic2.readValue();
          const decoder = new TextDecoder('utf-8');
          console.log(decoder.decode(value));
          acc[accy] = decoder.decode(value);

          console.log('Reading Characteristics...');
          const myCharacteristic3 = await service.getCharacteristic(CHARACTERISTIC_ACCZ_UUID);
          const value = await myCharacteristic3.readValue();
          const decoder = new TextDecoder('utf-8');
          console.log(decoder.decode(value));
          acc[accz] = decoder.decode(value);
          
          
        } catch(error) {
        console.log('Argh! ' + error);
      }
      
      if (device) {
        if (device.gatt.connected) {
          device.gatt.disconnect();
          console.log('disconnect');
        }
      }       
    

}