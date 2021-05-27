let physicsWorld, scene, camera, renderer, rigidBodies = [], tmpTrans = null
let tmpPos = new THREE.Vector3(), tmpQuat = new THREE.Quaternion();
let ammoTmpPos = null, ammoTmpQuat = null;
let mouseCoords = new THREE.Vector2(), raycaster = new THREE.Raycaster();


//Ammojs Initialization
Ammo().then(start)

function start (){

    tmpTrans = new Ammo.btTransform();
    ammoTmpPos = new Ammo.btVector3();
    ammoTmpQuat = new Ammo.btQuaternion();

    setupPhysicsWorld();

    setupGraphics();
    createBlock();
    createWall();
    createSkyBox();
    setupEventHandlers();
    renderFrame();

}

function setupPhysicsWorld(){

    let collisionConfiguration  = new Ammo.btDefaultCollisionConfiguration(),
        dispatcher              = new Ammo.btCollisionDispatcher(collisionConfiguration),
        overlappingPairCache    = new Ammo.btDbvtBroadphase(),
        solver                  = new Ammo.btSequentialImpulseConstraintSolver();

    physicsWorld           = new Ammo.btDiscreteDynamicsWorld(dispatcher, overlappingPairCache, solver, collisionConfiguration);
    physicsWorld.setGravity(new Ammo.btVector3(0, -20, 0));

}


function setupGraphics(){

    //create clock for timing
    clock = new THREE.Clock();

    //create the scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xbfd1e5 );

    //create camera
    camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 0.2, 5000 );
    camera.position.set( -200, 30, 0 );
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    let controls = new THREE.OrbitControls(camera);
    controls.addEventListener('change', renderer);
    controls.minDistance = 5;
    controls.maxDistance = 400;

    //Add hemisphere light
    let hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.1 );
    hemiLight.color.setHSL( 0.6, 0.6, 0.6 );
    hemiLight.groundColor.setHSL( 0.1, 1, 0.4 );
    hemiLight.position.set( 0, 50, 0 );
    scene.add( hemiLight );

    //Add directional light
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.3);
    dirLight.position.set(-300, 200, 30);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 20000;
    dirLight.shadow.mapSize.height = 512000;
    dirLight.shadow.camera.left = -2000;
    dirLight.shadow.camera.right = 2000;
    dirLight.shadow.camera.top = 2000;
    dirLight.shadow.camera.bottom = -2000;
    dirLight.shadow.camera.near = 100;
    dirLight.shadow.camera.far = 8000;

    //const helper = new THREE.CameraHelper( dirLight.shadow.camera );
    //scene.add( helper );

    scene.add( dirLight );

    dirLight.castShadow = true;

    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;

    let d = 50;

    dirLight.shadow.camera.left = -d;
    dirLight.shadow.camera.right = d;
    dirLight.shadow.camera.top = d;
    dirLight.shadow.camera.bottom = -d;

    dirLight.shadow.camera.far = 13500;

    //Setup the renderer
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setClearColor( 0xbfd1e5 );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    renderer.gammaInput = true;
    renderer.gammaOutput = true;

    renderer.shadowMap.enabled = true;

}


function renderFrame(){

    let deltaTime = clock.getDelta();

    updatePhysics( deltaTime );

    renderer.render( scene, camera );

    requestAnimationFrame( renderFrame );

}

function setupEventHandlers(){

    window.addEventListener( 'mousedown', onMouseDown, false );

    window.addEventListener('resize', function() {
        renderer.setSize(window.innerWidth, window.innerHeight);
     });

}




function updatePhysics( deltaTime ){

    // Step world
    physicsWorld.stepSimulation( deltaTime, 10 );

    // Update rigid bodies
    for ( let i = 0; i < rigidBodies.length; i++ ) {
        let objThree = rigidBodies[ i ];
        let objAmmo = objThree.userData.physicsBody;
        let ms = objAmmo.getMotionState();
        if ( ms ) {

            ms.getWorldTransform( tmpTrans );
            let p = tmpTrans.getOrigin();
            let q = tmpTrans.getRotation();
            objThree.position.set( p.x(), p.y(), p.z() );
            objThree.quaternion.set( q.x(), q.y(), q.z(), q.w() );

        }
    }

}
