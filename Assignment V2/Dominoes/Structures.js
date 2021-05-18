
var WallX = new Array(8);
var width;
var height;

function createWall() {

for (var i = 2; i < WallX.length+1; i++) { 
    
  var color = new THREE.Color(0xffffff);
  color.setHex(Math.random()*0xffffff);

  let scale = {x: Math.pow(1,i), y: Math.pow(2.1,i), z: Math.pow(2,i)};
    let pos = {x: scale.z -140, y: scale.y/2, z: 0};
    let quat = {x: 0, y: 0, z: 0, w: 1};
    let mass = scale.y;

    //threeJS Section
    let block = new THREE.Mesh(new THREE.BoxBufferGeometry(), new THREE.MeshPhongMaterial({color: color}));

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

