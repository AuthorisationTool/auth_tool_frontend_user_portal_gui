export function getGyroValuesFromBle(){

const SERVICE_GYRO_UUID = '6038dc34-80c6-4f03-8f95-735c87714fce';
const CHARACTERISTIC_GYROX_UUID = '8bec6f2b-6cf5-48e2-b9c4-5146049ae800';
const CHARACTERISTIC_GYROZ_UUID = '14834712-21e8-4d1d-95e5-f3988aa71844';
const CHARACTERISTIC_GYROZ_UUID = '3faecf53-f369-4171-ba2c-0d3368f262e3';
let gyro = {
    gyrox: '',
    gyroy: '',
    gyroz: ''
}
try {
    console.log('Requesting Bluetooth Device...');
    device = await navigator.bluetooth.requestDevice({
      filters: [
        { services: [SERVICE_GYRO_UUID] },
        { name: ['m5-stack'] },
      ],
    });
  
    console.log('Connecting to GATT Server...');
    const server = await device.gatt.connect();

    console.log('Getting Service...');
    const service = await server.getPrimaryService(SERVICE_GYRO_UUID);

    console.log('Reading Characteristics...');
      const myCharacteristic1 = await service.getCharacteristic(CHARACTERISTIC_GYROX_UUID);
      const value = await myCharacteristic1.readValue();
      const decoder = new TextDecoder('utf-8');
      console.log(decoder.decode(value));
      gyro[gyrox] = decoder.decode(value);
  
      console.log('Reading Characteristics...');
      const myCharacteristic2 = await service.getCharacteristic(CHARACTERISTIC_GYROY_UUID);
      const value = await myCharacteristic2.readValue();
      const decoder = new TextDecoder('utf-8');
      console.log(decoder.decode(value));
      gyro[gyroy] = decoder.decode(value);

      console.log('Reading Characteristics...');
      const myCharacteristic3 = await service.getCharacteristic(CHARACTERISTIC_GYROZ_UUID);
      const value = await myCharacteristic3.readValue();
      const decoder = new TextDecoder('utf-8');
      console.log(decoder.decode(value));
      gyro[gyroz] = decoder.decode(value);
      
      
    } catch(error) {
    console.log('Argh! ' + error);
  }
  
  if (device) {
    if (device.gatt.connected) {
      device.gatt.disconnect();
      console.log('disconnect');
    }
  }  
  return gyro;     
}