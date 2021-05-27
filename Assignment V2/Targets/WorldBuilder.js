function createBlock(){
    
    let pos = {x: 0, y: 0, z: 0};
    let scale = {x: 150, y: 2, z: 150};
    let quat = {x: 0, y: 0, z: 0, w: 1};
    let mass = 0;

    //threeJS Section
    let blockPlane = new THREE.Mesh(new THREE.BoxBufferGeometry(), new THREE.MeshPhongMaterial({color: 0xa0afa4}));

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

    physicsWorld.addRigidBody( body, colGroupPlane, colGroupRedBall | colGroupBlueBall | colGroupGreenBall);
}

function createSkyBox(){
    let skyBoxArray = [];
        let front = new THREE.TextureLoader().load( 'ModelsAndTextures/Ryfjallet/snow_front.jpg');
        let back  = new THREE.TextureLoader().load( 'ModelsAndTextures/Ryfjallet/snow_back.jpg');
        let up    = new THREE.TextureLoader().load( 'ModelsAndTextures/Ryfjallet/snow_up.jpg');
        let down  = new THREE.TextureLoader().load( 'ModelsAndTextures/Ryfjallet/snow_down.jpg');
        let right = new THREE.TextureLoader().load( 'ModelsAndTextures/Ryfjallet/snow_right.jpg');
        let left  = new THREE.TextureLoader().load( 'ModelsAndTextures/Ryfjallet/snow_left.jpg');

        skyBoxArray.push(new THREE.MeshBasicMaterial( { map: front }));
        skyBoxArray.push(new THREE.MeshBasicMaterial( { map: back  }));
        skyBoxArray.push(new THREE.MeshBasicMaterial( { map: up    }));
        skyBoxArray.push(new THREE.MeshBasicMaterial( { map: down  }));
        skyBoxArray.push(new THREE.MeshBasicMaterial( { map: right }));
        skyBoxArray.push(new THREE.MeshBasicMaterial( { map: left  }));

        for (let i=0; i < 6; i++)
            skyBoxArray[i].side = THREE.BackSide;

        let skyboxGeo = new THREE.BoxGeometry(1000, 1000, 1000);
        let skybox = new THREE.Mesh( skyboxGeo, skyBoxArray);
        scene.add(skybox);
}