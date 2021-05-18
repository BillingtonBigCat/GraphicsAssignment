
function onMouseDown ( event ) {

    
    mouseCoords.set(
        ( event.clientX / window.innerWidth ) * 2 - 1,
        - ( event.clientY / window.innerHeight ) * 2 + 1
    );


    raycaster.setFromCamera( mouseCoords, camera );

    // Creates a ball and throws it

    tmpPos.copy( raycaster.ray.direction );
    tmpPos.add( raycaster.ray.origin );


    let pos = {x: tmpPos.x, y: tmpPos.y, z: tmpPos.z};
    let radius = 0.5;
    let quat = {x: 0, y: 0, z: 0, w: 1};
    let mass = 0.1;

    //threeJS Section
    let ball = new THREE.Mesh(new THREE.SphereBufferGeometry(radius), new THREE.MeshPhongMaterial({color: 0x000000}));

    ball.position.set(pos.x, pos.y, pos.z);
    
    ball.castShadow = true;
    ball.receiveShadow = true;

    scene.add(ball);


    //Ammojs Section
    let transform = new Ammo.btTransform();
    transform.setIdentity();
    transform.setOrigin( new Ammo.btVector3( pos.x, pos.y, pos.z ) );
    transform.setRotation( new Ammo.btQuaternion( quat.x, quat.y, quat.z, quat.w ) );
    let motionState = new Ammo.btDefaultMotionState( transform );

    let colShape = new Ammo.btSphereShape( radius );
    colShape.setMargin( 0.05 );

    let localInertia = new Ammo.btVector3( 0, 0, 0 );
    colShape.calculateLocalInertia( mass, localInertia );

    let rbInfo = new Ammo.btRigidBodyConstructionInfo( mass, motionState, colShape, localInertia );
    let body = new Ammo.btRigidBody( rbInfo );

    physicsWorld.addRigidBody( body );

    tmpPos.copy( raycaster.ray.direction );
    tmpPos.multiplyScalar(100 );

    body.setLinearVelocity( new Ammo.btVector3( tmpPos.x, tmpPos.y, tmpPos.z ) );
    
    ball.userData.physicsBody = body;
    rigidBodies.push(ball);

}