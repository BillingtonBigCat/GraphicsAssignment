function createBlock(){
    
    let pos = {x: 0, y: 0, z: 4};
    let scale = {x: 50, y: 2, z: 50};
    let quat = {x: 0, y: 0, z: 0, w: 1};
    let mass = 0;

    //threeJS Section
    let blockPlane = new THREE.Mesh(new THREE.BoxBufferGeometry(), new THREE.MeshPhongMaterial({color: 0x228B22}));

    blockPlane.position.set(pos.x, pos.y, pos.z);
    blockPlane.scale.set(scale.x, scale.y, scale.z);

    blockPlane.castShadow = true;
    blockPlane.receiveShadow = true;

    scene.add(blockPlane);


    //Ammojs Section
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

    body.setFriction(4);
    body.setRollingFriction(10);

    physicsWorld.addRigidBody( body );
}

function createSkyBox(){
    let skyBoxArray = [];
        let texture_ft = new THREE.TextureLoader().load('ModelsAndTextures/barren_ft.jpg');
        let texture_bk = new THREE.TextureLoader().load('ModelsAndTextures/barren_bk.jpg');
        let texture_up = new THREE.TextureLoader().load('ModelsAndTextures/barren_up.jpg');
        let texture_dn = new THREE.TextureLoader().load('ModelsAndTextures/barren_dn.jpg');
        let texture_rt = new THREE.TextureLoader().load('ModelsAndTextures/barren_rt.jpg');
        let texture_lf = new THREE.TextureLoader().load('ModelsAndTextures/barren_lf.jpg');

        skyBoxArray.push(new THREE.MeshBasicMaterial({map: texture_ft}));
        skyBoxArray.push(new THREE.MeshBasicMaterial({map: texture_bk}));
        skyBoxArray.push(new THREE.MeshBasicMaterial({map: texture_up}));
        skyBoxArray.push(new THREE.MeshBasicMaterial({map: texture_dn}));
        skyBoxArray.push(new THREE.MeshBasicMaterial({map: texture_rt}));
        skyBoxArray.push(new THREE.MeshBasicMaterial({map: texture_lf}));
   
        for (let i = 0; i < 6; i++)
        skyBoxArray[i].side = THREE.BackSide;
        let skyboxGeo = new THREE.BoxGeometry( 1000, 1000, 1000);
        let skybox = new THREE.Mesh( skyboxGeo, skyBoxArray );
        scene.add( skybox );
}