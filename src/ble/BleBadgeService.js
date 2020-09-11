export async function getBadgeIDFromBle() {

    const SERVICE_BID_UUID = '704fcaaa-a20d-4d29-b984-e099a6828549';
    const CHARACTERISTIC_BID_UUID = 'c3fa560c-1f67-4ae3-97ec-ed73831270d8';
    let bid = '';
    let device = null;
  
    try {
      console.log('Requesting Bluetooth Device...');
      device = await navigator.bluetooth.requestDevice({
        filters: [
          { services: [SERVICE_BID_UUID] },
          { name: ["m5-stack"] },
        ],
      });
    
      console.log('Connecting to GATT Server...');
      const server = await device.gatt.connect();
  
      console.log('Getting Service...');
      const service = await server.getPrimaryService(SERVICE_BID_UUID);
  
      console.log('Getting Characteristics...');
      const myCharacteristic = await service.getCharacteristic(CHARACTERISTIC_BID_UUID);
  
        console.log('Reading Characteristics...');
        const value = await myCharacteristic.readValue();
        const decoder = new TextDecoder('utf-8');
        console.log(decoder.decode(value));
        bid = decoder.decode(value);
        
      } catch(error) {
      console.log('Argh! ' + error);
    }
    
    if (device) {
      if (device.gatt.connected) {
        device.gatt.disconnect();
        console.log('disconnect');
      }
    }

    return bid;
  }
  