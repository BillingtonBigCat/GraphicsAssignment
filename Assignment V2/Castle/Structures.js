
function FirstTower(){
  let pos = {x:-35, y: 4, z: - 30};
  let scale = {x: 5, y: 20, z: 5};
  let quat = {x: 0, y: 0, z: 0, w: 1};
  let mass = 0;

  //threeJS Section
  let tower = new THREE.Mesh(new THREE.BoxBufferGeometry(), new THREE.MeshPhongMaterial({color: 0x252525}));

  tower.position.set(pos.x, pos.y, pos.z);
  tower.scale.set(scale.x, scale.y, scale.z);

  tower.castShadow = true;
  tower.receiveShadow = true;

  scene.add(tower);


  //AmmoJS
  let transform = new Ammo.btTransform();
  transform.setIdentity();
  transform.setOrigin( new Ammo.btVector3( pos.x, pos.y, pos.z) );
  transform.setRotation( new Ammo.btQuaternion( quat.x, quat.y, quat.z, quat.w ) );
  let motionState = new Ammo.btDefaultMotionState( transform );

  let colShape = new Ammo.btBoxShape( new Ammo.btVector3( scale.x * 0.5, scale.y * 0.5, scale.z * 0.5 ) );
  colShape.setMargin( 0.05 );

  let localInertia = new Ammo.btVector3( 0, 0, 0 );
  colShape.calculateLocalInertia( mass, localInertia );

  let rbInfo = new Ammo.btRigidBodyConstructionInfo( mass, motionState, colShape, localInertia );
  let body = new Ammo.btRigidBody( rbInfo );

  physicsWorld.addRigidBody( body );
  
  tower.userData.physicsBody = body;
  rigidBodies.push(tower);
}

function cone(){
  let pos = {x:-35, y: 30, z: - 30};
    let scale = {x: 2, y: 2, z: 2};
  let quat = {x: 0, y: 0, z: 0, w: 1};
  let mass = 1;

  //threeJS Section
  let tower = new THREE.Mesh(new THREE.ConeGeometry(), new THREE.MeshPhongMaterial({color: 0xFF0000}));

  tower.position.set(pos.x, pos.y, pos.z);
  tower.scale.set(scale.x, scale.y, scale.z);

  tower.castShadow = true;
  tower.receiveShadow = true;

  scene.add(tower);


  //AmmoJS
  let transform = new Ammo.btTransform();
  transform.setIdentity();
  transform.setOrigin( new Ammo.btVector3( pos.x, pos.y, pos.z) );
  transform.setRotation( new Ammo.btQuaternion( quat.x, quat.y, quat.z, quat.w ) );
  let motionState = new Ammo.btDefaultMotionState( transform );

  let colShape = new Ammo.btBoxShape( new Ammo.btVector3( scale.x * 0.5, scale.y * 0.5, scale.z * 0.5 ) );
  colShape.setMargin( 0.05 );

  let localInertia = new Ammo.btVector3( 0, 0, 0 );
  colShape.calculateLocalInertia( mass, localInertia );

  let rbInfo = new Ammo.btRigidBodyConstructionInfo( mass, motionState, colShape, localInertia );
  let body = new Ammo.btRigidBody( rbInfo );

  physicsWorld.addRigidBody( body );
  
  tower.userData.physicsBody = body;
  rigidBodies.push(tower);
}

function secondTower(){
  let pos = {x:-25, y: 4, z: - 25};
  let scale = {x: 5, y: 20, z: 5};
  let quat = {x: 0, y: 0, z: 0, w: 1};
  let mass = 0;

  //threeJS Section
  let tower = new THREE.Mesh(new THREE.BoxBufferGeometry(), new THREE.MeshPhongMaterial({color: 0x252525}));

  tower.position.set(pos.x, pos.y, pos.z);
  tower.scale.set(scale.x, scale.y, scale.z);

  tower.castShadow = true;
  tower.receiveShadow = true;

  scene.add(tower);


  //AmmoJS
  let transform = new Ammo.btTransform();
  transform.setIdentity();
  transform.setOrigin( new Ammo.btVector3( pos.x, pos.y, pos.z) );
  transform.setRotation( new Ammo.btQuaternion( quat.x, quat.y, quat.z, quat.w ) );
  let motionState = new Ammo.btDefaultMotionState( transform );

  let colShape = new Ammo.btBoxShape( new Ammo.btVector3( scale.x * 0.5, scale.y * 0.5, scale.z * 0.5 ) );
  colShape.setMargin( 0.05 );

  let localInertia = new Ammo.btVector3( 0, 0, 0 );
  colShape.calculateLocalInertia( mass, localInertia );

  let rbInfo = new Ammo.btRigidBodyConstructionInfo( mass, motionState, colShape, localInertia );
  let body = new Ammo.btRigidBody( rbInfo );

  physicsWorld.addRigidBody( body );
  
  tower.userData.physicsBody = body;
  rigidBodies.push(tower);
}

function box(){
  let pos = {x:-25, y: 30, z: - 25};
    let scale = {x: 2, y: 2, z: 2};
  let quat = {x: 0, y: 0, z: 0, w: 1};
  let mass = 1;

  //threeJS Section
  let tower = new THREE.Mesh(new THREE.BoxBufferGeometry(), new THREE.MeshPhongMaterial({color: 0x61FF00}));

  tower.position.set(pos.x, pos.y, pos.z);
  tower.scale.set(scale.x, scale.y, scale.z);

  tower.castShadow = true;
  tower.receiveShadow = true;

  scene.add(tower);


  //AmmoJS
  let transform = new Ammo.btTransform();
  transform.setIdentity();
  transform.setOrigin( new Ammo.btVector3( pos.x, pos.y, pos.z) );
  transform.setRotation( new Ammo.btQuaternion( quat.x, quat.y, quat.z, quat.w ) );
  let motionState = new Ammo.btDefaultMotionState( transform );

  let colShape = new Ammo.btBoxShape( new Ammo.btVector3( scale.x * 0.5, scale.y * 0.5, scale.z * 0.5 ) );
  colShape.setMargin( 0.05 );

  let localInertia = new Ammo.btVector3( 0, 0, 0 );
  colShape.calculateLocalInertia( mass, localInertia );

  let rbInfo = new Ammo.btRigidBodyConstructionInfo( mass, motionState, colShape, localInertia );
  let body = new Ammo.btRigidBody( rbInfo );

  physicsWorld.addRigidBody( body );
  
  tower.userData.physicsBody = body;
  rigidBodies.push(tower);
}

function thirdTower(){
  let pos = {x:-15, y: 4, z: -20};
  let scale = {x: 5, y: 20, z: 5};
  let quat = {x: 0, y: 0, z: 0, w: 1};
  let mass = 0;

  //threeJS Section
  let tower = new THREE.Mesh(new THREE.BoxBufferGeometry(), new THREE.MeshPhongMaterial({color: 0x252525}));

  tower.position.set(pos.x, pos.y, pos.z);
  tower.scale.set(scale.x, scale.y, scale.z);

  tower.castShadow = true;
  tower.receiveShadow = true;

  scene.add(tower);


  //AmmoJS
  let transform = new Ammo.btTransform();
  transform.setIdentity();
  transform.setOrigin( new Ammo.btVector3( pos.x, pos.y, pos.z) );
  transform.setRotation( new Ammo.btQuaternion( quat.x, quat.y, quat.z, quat.w ) );
  let motionState = new Ammo.btDefaultMotionState( transform );

  let colShape = new Ammo.btBoxShape( new Ammo.btVector3( scale.x * 0.5, scale.y * 0.5, scale.z * 0.5 ) );
  colShape.setMargin( 0.05 );

  let localInertia = new Ammo.btVector3( 0, 0, 0 );
  colShape.calculateLocalInertia( mass, localInertia );

  let rbInfo = new Ammo.btRigidBodyConstructionInfo( mass, motionState, colShape, localInertia );
  let body = new Ammo.btRigidBody( rbInfo );

  physicsWorld.addRigidBody( body );
  
  tower.userData.physicsBody = body;
  rigidBodies.push(tower);
}

function torus(){
  let pos = {x:-15, y: 30, z: - 20};
    let scale = {x: 1, y: 1, z: 1};
  let quat = {x: 0, y: 0, z: 0, w: 1};
  let mass = 1;

  //threeJS Section
  let tower = new THREE.Mesh(new THREE.CylinderGeometry(), new THREE.MeshPhongMaterial({color: 0x0036FF}));

  tower.position.set(pos.x, pos.y, pos.z);
  tower.scale.set(scale.x, scale.y, scale.z);

  tower.castShadow = true;
  tower.receiveShadow = true;

  scene.add(tower);


  //AmmoJS
  let transform = new Ammo.btTransform();
  transform.setIdentity();
  transform.setOrigin( new Ammo.btVector3( pos.x, pos.y, pos.z) );
  transform.setRotation( new Ammo.btQuaternion( quat.x, quat.y, quat.z, quat.w ) );
  let motionState = new Ammo.btDefaultMotionState( transform );

  let colShape = new Ammo.btBoxShape( new Ammo.btVector3( scale.x * 1, scale.y * 0.5, scale.z * 1 ) );
  colShape.setMargin( 0.05 );

  let localInertia = new Ammo.btVector3( 0, 0, 0 );
  colShape.calculateLocalInertia( mass, localInertia );

  let rbInfo = new Ammo.btRigidBodyConstructionInfo( mass, motionState, colShape, localInertia );
  let body = new Ammo.btRigidBody( rbInfo );

  physicsWorld.addRigidBody( body );
  
  tower.userData.physicsBody = body;
  rigidBodies.push(tower);
}

function createPins1(number) {

  for (var i = 0; i < number; i++) { 
      
  
      let pos = {x:-40 + 30*i, y: 1, z: -6*i +20};
      //let pos = {x: 44 + 4*i, y: 2, z: 3*i - 3  };
      let scale = {x: 2, y: 15, z: 2};
      let quat = {x: 0, y: 0, z: 0, w: 1};
      let mass = 0;
  
      //threeJS Section
      let block = new THREE.Mesh(new THREE.BoxBufferGeometry(), new THREE.MeshPhongMaterial({color: 0x252525}));
  
      block.position.set(pos.x, pos.y, pos.z);
      block.scale.set(scale.x, scale.y, scale.z);
  
      block.castShadow = true;
      block.receiveShadow = true;
  
      scene.add(block);
  
      //AmmoJS
      let transform = new Ammo.btTransform();
      transform.setIdentity();
      transform.setOrigin( new Ammo.btVector3( pos.x, pos.y, pos.z ) );
      transform.setRotation( new Ammo.btQuaternion( quat.x, quat.y, quat.z, quat.w ) );
      let motionState = new Ammo.btDefaultMotionState( transform );
  
      let colShape = new Ammo.btBoxShape( new Ammo.btVector3( scale.x * 0.5, scale.y * 0.5, scale.z * 0.5 ) );
      colShape.setMargin( 0.05 );
  
      let localInertia = new Ammo.btVector3( 0, 0, 0 );
      colShape.calculateLocalInertia( mass, localInertia );
  
      let rbInfo = new Ammo.btRigidBodyConstructionInfo( mass, motionState, colShape, localInertia );
      let body = new Ammo.btRigidBody( rbInfo );
  
      physicsWorld.addRigidBody( body );
      
      block.userData.physicsBody = body;
      rigidBodies.push(block);
      }
  
  }

  function createPins2(number) {

    for (var i = 0; i < number; i++) { 
        
    
        let pos = {x:-40 + 30*i, y: 30, z: -6*i +20};
        //let pos = {x: 44 + 4*i, y: 2, z: 3*i - 3  };
        let scale = {x: 2, y: 2, z: 2};
        let quat = {x: 0, y: 0, z: 0, w: 1};
        let mass = 1;
    
        //threeJS Section
        let block = new THREE.Mesh(new THREE.BoxBufferGeometry(), new THREE.MeshPhongMaterial({color: 0xFFFB00}));
    
        block.position.set(pos.x, pos.y, pos.z);
        block.scale.set(scale.x, scale.y, scale.z);
    
        block.castShadow = true;
        block.receiveShadow = true;
    
        scene.add(block);
    
        //AmmoJS
        let transform = new Ammo.btTransform();
        transform.setIdentity();
        transform.setOrigin( new Ammo.btVector3( pos.x, pos.y, pos.z ) );
        transform.setRotation( new Ammo.btQuaternion( quat.x, quat.y, quat.z, quat.w ) );
        let motionState = new Ammo.btDefaultMotionState( transform );
    
        let colShape = new Ammo.btBoxShape( new Ammo.btVector3( scale.x * 0.5, scale.y * 0.5, scale.z * 0.5 ) );
        colShape.setMargin( 0.05 );
    
        let localInertia = new Ammo.btVector3( 0, 0, 0 );
        colShape.calculateLocalInertia( mass, localInertia );
    
        let rbInfo = new Ammo.btRigidBodyConstructionInfo( mass, motionState, colShape, localInertia );
        let body = new Ammo.btRigidBody( rbInfo );
    
        physicsWorld.addRigidBody( body );
        
        block.userData.physicsBody = body;
        rigidBodies.push(block);
        }
    
    }

 
/*function createTower2(){
  let pos = {x:0, y: 8, z: 19};
  let scale = {x: 10, y: 30, z: 10};
  let quat = {x: 0, y: 0, z: 0, w: 1};
  let mass = 100000;

  //threeJS Section
  let tower = new THREE.Mesh(new THREE.BoxBufferGeometry(), new THREE.MeshPhongMaterial({color: 0x2a2a2a}));

  tower.position.set(pos.x, pos.y, pos.z);
  tower.scale.set(scale.x, scale.y, scale.z);

  tower.castShadow = true;
  tower.receiveShadow = true;

  scene.add(tower);


  //AmmoJS
  let transform = new Ammo.btTransform();
  transform.setIdentity();
  transform.setOrigin( new Ammo.btVector3( pos.x, pos.y, pos.z ) );
  transform.setRotation( new Ammo.btQuaternion( quat.x, quat.y, quat.z, quat.w ) );
  let motionState = new Ammo.btDefaultMotionState( transform );

  let colShape = new Ammo.btBoxShape( new Ammo.btVector3( scale.x * 0.5, scale.y * 0.5, scale.z * 0.5 ) );
  colShape.setMargin( 0.05 );

  let localInertia = new Ammo.btVector3( 0, 0, 0 );
  colShape.calculateLocalInertia( mass, localInertia );

  let rbInfo = new Ammo.btRigidBodyConstructionInfo( mass, motionState, colShape, localInertia );
  let body = new Ammo.btRigidBody( rbInfo );

  physicsWorld.addRigidBody( body );
  
  tower.userData.physicsBody = body;
  rigidBodies.push(tower);
}

var WallX = new Array(1);
var width;
var height;

for (var i = 0; i < WallX.length; i++) {
    WallX[i] = new Array(1);
}

function createWall(hello) 
{
for (var i = 0; i < WallX.length; i++) {
    for (var x = 0; x < WallX[i].length; x++){
    
    width = x;
    height = i;
     
    let pos = {x:0, y: 20, z: - 11};
    let scale = {x: 2, y: 2, z: 2};
    let quat = {x: 0, y: 0, z: 0, w: 1};
    let mass = 1;

    //threeJS Section
    let block = new THREE.Mesh(new THREE.BoxBufferGeometry(), new THREE.MeshPhongMaterial({color: 0x333333}));

    block.position.set(pos.x, pos.y, pos.z);
    block.scale.set(scale.x, scale.y, scale.z);

    block.castShadow = true;
    block.receiveShadow = true;

    scene.add(block);


    //AmmoJS
    let transform = new Ammo.btTransform();
    transform.setIdentity();
    transform.setOrigin( new Ammo.btVector3( pos.x, pos.y, pos.z ) );
    transform.setRotation( new Ammo.btQuaternion( quat.x, quat.y, quat.z, quat.w ) );
    let motionState = new Ammo.btDefaultMotionState( transform );

    let colShape = new Ammo.btBoxShape( new Ammo.btVector3( scale.x * 0.5, scale.y * 0.5, scale.z * 0.5 ) );
    colShape.setMargin( 0.05 );

    let localInertia = new Ammo.btVector3( 0, 0, 0 );
    colShape.calculateLocalInertia( mass, localInertia );

    let rbInfo = new Ammo.btRigidBodyConstructionInfo( mass, motionState, colShape, localInertia );
    let body = new Ammo.btRigidBody( rbInfo );

    physicsWorld.addRigidBody( body );
    
    block.userData.physicsBody = body;
    rigidBodies.push(block);
      
    }
}


}*/