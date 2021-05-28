var WallX = new Array(10);
var width;
var height;
var wallColour;
//test wall
var BarrierA = new Array(15);
for (var i = 0; i < BarrierA.length; i++) {
  BarrierA[i] = new Array(15);
}
var BarrierB = new Array(20);
for (var i = 0; i < BarrierB.length; i++) {
  BarrierB[i] = new Array(20);
}


//assigning random colours to structures
function assignColour() {
  var randomC = Math.floor(Math.random() * 3);;
  
  if (randomC == 0){
    segmentColour = new THREE.Color(0xff0000); //red
    wallColour = 0;
  }
  else if ( randomC == 1){
    segmentColour = new THREE.Color(0x00ff00); //green 
    wallColour = 1;
  }

  else if ( randomC == 2){
    segmentColour = new THREE.Color(0x0000ff); //blue
    wallColour = 2;
  }
}

//create left blocks wall
function createBarrier() {
  assignColour();
  for (var j = 0; j < 2; j++){
    for (var i = 0; i < BarrierA.length; i++) {
      for (var x = 0; x < BarrierA[i].length; x++){
      
        width = x;
        height = i;
        
        let pos = {x:j+15, y: 2*height + 2, z: 2*width +10};
        //let pos = {x:j +15, y: 2*height + 2, z: 2 +40};
        let scale = {x: 2, y: 2, z: 2};
        let quat = {x: 0, y: 0, z: 0, w: 1};
        let mass = 0.5;

        //threeJS Section
        let block = new THREE.Mesh(new THREE.BoxBufferGeometry(), new THREE.MeshPhongMaterial({color: segmentColour}));

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

        //physicsWorld.addRigidBody( body );
        if (wallColour == 0){
          physicsWorld.addRigidBody( body, colGroupRedBall, colGroupPlane | colGroupRedBall | colGroupGreenBall | colGroupBlueBall );
        }
        else if (wallColour == 1){
          physicsWorld.addRigidBody( body, colGroupGreenBall, colGroupPlane | colGroupGreenBall | colGroupRedBall | colGroupBlueBall);
        }
      
        else if (wallColour == 2){
          physicsWorld.addRigidBody( body, colGroupBlueBall, colGroupPlane | colGroupBlueBall | colGroupRedBall | colGroupGreenBall );
        }
        
        block.userData.physicsBody = body;
        rigidBodies.push(block);  
      }
    }
  }
}

//create right blocks wall
function createBarrier2() {
  assignColour();
  for (var j = 0; j < 2; j++){
    for (var i = 0; i < BarrierA.length; i++) {
      for (var x = 0; x < BarrierA[i].length; x++){
      
        width = x;
        height = i;
        
        let pos = {x:j+15, y: 2*height + 2, z: 2*width -38};
        let scale = {x: 2, y: 2, z: 2};
        let quat = {x: 0, y: 0, z: 0, w: 1};
        let mass = 0.5;

        //threeJS Section
        let block = new THREE.Mesh(new THREE.BoxBufferGeometry(), new THREE.MeshPhongMaterial({color: segmentColour}));

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

        //physicsWorld.addRigidBody( body );
        if (wallColour == 0){
          physicsWorld.addRigidBody( body, colGroupRedBall, colGroupPlane | colGroupRedBall | colGroupGreenBall | colGroupBlueBall );
        }
        else if (wallColour == 1){
          physicsWorld.addRigidBody( body, colGroupGreenBall, colGroupPlane | colGroupGreenBall | colGroupRedBall | colGroupBlueBall);
        }
      
        else if (wallColour == 2){
          physicsWorld.addRigidBody( body, colGroupBlueBall, colGroupPlane | colGroupBlueBall | colGroupRedBall | colGroupGreenBall );
        }
        
        block.userData.physicsBody = body;
        rigidBodies.push(block);  
      }
    }
  }
}

//creat leftside wall
function createSideWall1(){
  let pos = {x: -15, y: 8, z: 42};
  let scale = {x: 80, y: 30, z: 5};
  let quat = {x: 0, y: 0, z: 0, w: 1};
  let mass = 100000;

  //threeJS Section
  let wall = new THREE.Mesh(new THREE.BoxBufferGeometry(), new THREE.MeshPhongMaterial({color: 0x2a2a2a}));

  wall.position.set(pos.x, pos.y, pos.z);
  wall.scale.set(scale.x, scale.y, scale.z);

  wall.castShadow = true;
  wall.receiveShadow = true;

  scene.add(wall);


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

  physicsWorld.addRigidBody( body, colGroupRedBall | colGroupGreenBall | colGroupBlueBall, colGroupPlane | colGroupRedBall | colGroupGreenBall | colGroupBlueBall );
  
  wall.userData.physicsBody = body;
  rigidBodies.push(wall);
}

//create rightside wall
function createSideWall2(){
  let pos = {x: -15, y: 8, z: -42};
  let scale = {x: 80, y: 30, z: 5};
  let quat = {x: 0, y: 0, z: 0, w: 1};
  let mass = 100000;

  //threeJS Section
  let wall = new THREE.Mesh(new THREE.BoxBufferGeometry(), new THREE.MeshPhongMaterial({color: 0x2a2a2a}));

  wall.position.set(pos.x, pos.y, pos.z);
  wall.scale.set(scale.x, scale.y, scale.z);

  wall.castShadow = true;
  wall.receiveShadow = true;

  scene.add(wall);


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

  physicsWorld.addRigidBody( body, colGroupRedBall | colGroupGreenBall | colGroupBlueBall, colGroupPlane | colGroupRedBall | colGroupGreenBall | colGroupBlueBall );
  
  wall.userData.physicsBody = body;
  rigidBodies.push(wall);
}

//creat back wall
function createBackWall(){
  let pos = {x: -53, y: 8, z: 0};
  let scale = {x: 4, y: 30, z: 80};
  let quat = {x: 0, y: 0, z: 0, w: 1};
  let mass = 1000;

  //threeJS Section
  let wall = new THREE.Mesh(new THREE.BoxBufferGeometry(), new THREE.MeshPhongMaterial({color: 0x2a2a2a}));

  wall.position.set(pos.x, pos.y, pos.z);
  wall.scale.set(scale.x, scale.y, scale.z);

  wall.castShadow = true;
  wall.receiveShadow = true;

  scene.add(wall);


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

  physicsWorld.addRigidBody( body, colGroupRedBall | colGroupGreenBall | colGroupBlueBall, colGroupPlane | colGroupRedBall | colGroupGreenBall | colGroupBlueBall );
  
  wall.userData.physicsBody = body;
  rigidBodies.push(wall);
}

//colored targets
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