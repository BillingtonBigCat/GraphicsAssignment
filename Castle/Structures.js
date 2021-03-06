
function createTower(){
  let pos = {x:0, y: 8, z: - 11};
  let scale = {x: 10, y: 30, z: 10};
  let quat = {x: 0, y: 0, z: 0, w: 1};
  let mass = 100000;

  //threeJS Section
  let tower = new THREE.Mesh(new THREE.BoxBufferGeometry(), new THREE.MeshPhongMaterial({color: 0x2a2a2a}));

  tower.position.set(pos.x, pos.y, pos.z);
  tower.scale.set(scale.x, scale.y, scale.z);
  var stone_texture = new THREE.TextureLoader().load('Assignment V2/ModelsAndTextures/Stone.jpeg');
  material_tower.map= stone_texture;
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

function createTower2(){
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

var WallX = new Array(10);
var width;
var height;

for (var i = 0; i < WallX.length; i++) {
    WallX[i] = new Array(10);
}

function createWall(hello) 
{
for (var i = 0; i < WallX.length; i++) {
    for (var x = 0; x < WallX[i].length; x++){
    
    width = x;
    height = i;
     
    let pos = {x:hello, y: 2*height + 2, z: 2*width - 5};
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


}