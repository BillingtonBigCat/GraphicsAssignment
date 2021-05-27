
var WallX = new Array(10);
var width;
var height;

function createRed() {

for (var i = 0; i < WallX.length; i++) {

    let pos = {x: -20, y: 4*i + 2, z: 0};
    let scale = {x: 4, y: 4, z: 4};
    let quat = {x: 0, y: 0, z: 0, w: 1};
    let mass = 1;

    //threeJS Section
    let block = new THREE.Mesh(new THREE.BoxBufferGeometry(), new THREE.MeshPhongMaterial({color: 0xff0000}));

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

    physicsWorld.addRigidBody( body, colGroupRedBall, colGroupPlane | colGroupRedBall | colGroupGreenBall | colGroupBlueBall );
    
    block.userData.physicsBody = body;
    rigidBodies.push(block);
    }
}

function createGreen() {
  for (var i = 0; i < WallX.length; i++) {
  let pos = {x: -20, y: 4*i + 2, z: 20};
  let scale = {x: 4, y: 4, z: 4};
  let quat = {x: 0, y: 0, z: 0, w: 1};
  let mass = 1;

  //threeJS Section
  let block = new THREE.Mesh(new THREE.BoxBufferGeometry(), new THREE.MeshPhongMaterial({color: 0x00ff00}));

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

  physicsWorld.addRigidBody( body, colGroupGreenBall, colGroupPlane | colGroupGreenBall | colGroupRedBall | colGroupBlueBall);
  
  block.userData.physicsBody = body;
  rigidBodies.push(block);
  }
}


function createBlue() {
  for (var i = 0; i < WallX.length; i++) {
  let pos = {x: -20, y: 4*i + 2, z: -20};
  let scale = {x: 4, y: 4, z: 4};
  let quat = {x: 0, y: 0, z: 0, w: 1};
  let mass = 1;

  //threeJS Section
  let block = new THREE.Mesh(new THREE.BoxBufferGeometry(), new THREE.MeshPhongMaterial({color: 0x0000ff}));

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

  physicsWorld.addRigidBody( body, colGroupBlueBall, colGroupPlane | colGroupBlueBall | colGroupRedBall | colGroupGreenBall );
  
  block.userData.physicsBody = body;
  rigidBodies.push(block);
  }
}

