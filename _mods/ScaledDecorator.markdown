---
layout: post
title:  "Scaled Decorator"
date:   2025-6-28
categories: mods
---
### ScaledDecorator is a mod that allows users to add any unity object (particles, meshes, etc) into a planet's ScaledSpace. This is done through AssetBundles, and as a result is very versatile.

### Usage tutorial:
<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/mLnhiSWqwX4?si=Q0WZ4T-hV4JXJm0N" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Config Format:
Put this into a .cfg in GameData. This does NOT go into a planet's Kopernicus Body node!
```C#
ScaledDecoratorObject
{
    assetBundle = Path/To/AssetBundle.unity3d // Path to the AssetBundle. Below are instructions on making one
    prefab = NAMEOFPREFAB // Name of the GameObject you want to load
    parent = Sun // Name of the parent body
    rotatesWithParent = false // Whether or not the prefab rotates with the parent body
    rotation = 0,0,0 // Rotation of the prefab
    rotationSpeed = 0,0,0 // Rotation direction of the prefab
    localPosition = 0,0,0 // Position relative to the parent body
    scale = 1,1,1 // Scale multiplier of the prefab
}
```
More detailed info:

| Default Value | Value | Description |
| ------------- | ------------- | ------------- |
| REQUIRED | assetBundle  | Filepath to the AssetBundle you wish to load. The path begins at GameData. Below this table are instructions on how to export an AssetBundle from Unity. |
| REQUIRED | prefab  | The name of the GameObject within the AssetBundle. This is because AssetBundles load several things (textures, materials, meshes, prefabs) so you have to specify the name of the thing you wish to Instantiate (in this case it should be the name of the prefab)  |
| REQUIRED | parent  | The name of celestial body that the object is parented to. |
| true | rotatesWithParent  | If true, rotation will be locked to rotate with the parent planet. Otherwise it will rotate independently. |
| (0,0,0) | rotation  | The initial rotation of the object. If rotatesWithParent is true, then the object will be rotated locally within the parent. Otherwise it will be rotated globally. |
| (0,0,0) | rotationSpeed  | The degrees per second that the object rotates. Only functions if rotatesWithParent is false. |
| (0,0,0) | localPosition  | The position relative to the parent body. |
| (1,1,1) | scale | The scale multiplier, scale should generally be set within the prefab but this can be used if that cannot be done. |

## Recommended tools:
### Unity Explorer: https://github.com/KSPModdingLibs/UnityExplorerKSP/releases
* The object is parented in: ``DontDestroyOnLoad/scaledSpace/[parent]/``
* Allows you to edit the position/scale/rotation within KSP for fine tuning (since Unity's coordinates are largely arbitrary)

#### [Source code](https://github.com/Sushutt/ScaledDecorator)

#### [KSP Forum page](https://forum.kerbalspaceprogram.com/topic/228197-scaleddecorator-a-mod-for-planet-pack-creators-to-load-assetbundles-into-scaledspace/)

## [Download](/assets/file-downloads/kspmods/ScaledDecorator.zip)